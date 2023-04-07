#!/usr/bin/env node

const path = require("path");
const esbuild = require("esbuild");
const entryPoints = ["application.js"];

const watchDirectories = [
  "./app/javascript/**/*.js",
  "./app/views/**/*.html.erb",
  "./app/assets/stylesheets/*.css",
  "./app/assets/stylesheets/*.scss",
];

const config = {
  entryPoints,
  bundle: true,
  sourcemap: true,
  outdir: path.join(process.cwd(), "app/assets/builds"),
  absWorkingDir: path.join(process.cwd(), "app/javascript"),
};

async function rebuild() {
  const clients = [];
  const http = require("http");
  const chokidar = require("chokidar");

  http
    .createServer((_, res) =>
      clients.push(
        res.writeHead(200, {
          Connection: "keep-alive",
          "Cache-Control": "no-cache",
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "text/event-stream",
        })
      )
    )
    .listen(8082);

  const result = await esbuild.build({
    ...config,
    incremental: true,
    banner: {
      js: ' (() => new EventSource("http://localhost:8082").onmessage = () => location.reload())();',
    },
  });

  chokidar.watch(watchDirectories).on("all", (_, path) => {
    if (path.includes("javascript")) result.rebuild();

    clients.forEach((res) => res.write("data: update\n\n"));
    clients.length = 0;
  });
}

if (process.argv.includes("--rebuild")) rebuild();
else
  esbuild
    .build({
      ...config,
      minify: process.env.RAILS_ENV == "production",
    })
    .catch(() => process.exit(1));
