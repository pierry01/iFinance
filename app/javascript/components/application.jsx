import React from "react";
import ReactDOM from "react-dom";

function App({ arg }) {
  return <h1>Hello World with {arg}!</h1>;
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  ReactDOM.render(<App arg="Rails 7 with ESBUILD" />, root);
});
