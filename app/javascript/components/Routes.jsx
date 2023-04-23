import React from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";

import Home from "pages/Home";
import Transactions from "pages/Transactions";
import NetworkError from "pages/NetworkError";
import NoMatch from "pages/NoMatch";
import Login from "pages/Login";

import auth from "config/auth";

function Router() {
  const { pathname } = useLocation();

  if (!auth.isAuthenticated() && pathname !== "/login")
    return <Navigate to="/login" />;

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path=":bankAccountId/transactions" element={<Transactions />} />

      <Route path="network-error" element={<NetworkError />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default Router;
