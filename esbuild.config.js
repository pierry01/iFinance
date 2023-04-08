#!/usr/bin/env node

const path = require("path");
const http = require("http");
const esbuild = require("esbuild");
const chokidar = require("chokidar");

const watchDirectories = [
  "./app/views/**/*",
  "./app/javascript/**/*",
  "./app/assets/stylesheets/*",
];

const config = {
  bundle: true,
  sourcemap: true,
  entryPoints: ["application.js"],
  outdir: path.join(process.cwd(), "app/assets/builds"),
  absWorkingDir: path.join(process.cwd(), "app/javascript"),
};

async function rebuild() {
  const clients = [];

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

  chokidar.watch(watchDirectories).on("all", (_, thePath) => {
    if (thePath.includes("javascript")) result.rebuild();

    clients.forEach((res) => res.write("data: update\n\n"));
    clients.length = 0;
  });
}

if (process.argv.includes("--rebuild")) rebuild();
else
  esbuild
    .build({
      ...config,
      minify: process.env.RAILS_ENV === "production",
    })
    .catch(() => process.exit(1));
