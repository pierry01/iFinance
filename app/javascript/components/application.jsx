import React from "react";
import ReactDOM from "react-dom";

function App() {
  return <h1>Hello World!</h1>;
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  ReactDOM.render(<App arg="Rails 7 with ESBUILD" />, root);
});
