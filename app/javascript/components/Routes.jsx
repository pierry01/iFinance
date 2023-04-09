import React from "react";
import PropTypes from "prop-types";
import { Route, Routes, Navigate } from "react-router-dom";

import Home from "components/Home";
import NetworkError from "components/NetworkError";
import NoMatch from "components/NoMatch";
import Login from "components/login/Login";
import CreateBankAccount from "components/bank_account/CreateBankAccount";

import auth from "config/auth";

function RequireAuth({ children }) {
  return auth.isAuthenticated() ? children : <Navigate to="/login" />;
}

function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }
      />

      <Route
        path="create-bank-account"
        element={
          <RequireAuth>
            <CreateBankAccount />
          </RequireAuth>
        }
      />

      <Route path="login" element={<Login />} />
      <Route path="network-error" element={<NetworkError />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

RequireAuth.propTypes = { children: PropTypes.node.isRequired };

export default Router;
