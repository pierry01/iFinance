import React from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";

import Home from "components/Home";
import NetworkError from "components/NetworkError";
import NoMatch from "components/NoMatch";
import Login from "components/login/Login";
import CreateBankAccount from "components/bank_account/CreateBankAccount";

import auth from "config/auth";

function Router() {
  const { pathname } = useLocation();

  if (!auth.isAuthenticated() && pathname !== "/login")
    return <Navigate to="/login" />;

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="create-bank-account" element={<CreateBankAccount />} />
      <Route path="login" element={<Login />} />
      <Route path="network-error" element={<NetworkError />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default Router;
