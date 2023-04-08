import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import NetworkError from "./NetworkError";
import NoMatch from "./NoMatch";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="network-error" element={<NetworkError />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default Router;
