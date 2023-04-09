import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "components/Home";
import NetworkError from "components/NetworkError";
import NoMatch from "components/NoMatch";
import Login from "components/login/Login";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="network-error" element={<NetworkError />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default Router;
