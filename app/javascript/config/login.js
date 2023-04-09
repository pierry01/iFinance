/* eslint-disable no-alert */

import axios from "axios";
import graphql from "./graphql";

export default (user) =>
  new Promise(() => {
    axios
      .post("/users/sign_in.json", { user })
      .then(({ headers }) => {
        localStorage.setItem("I_FINANCE_TOKEN", headers.authorization);
        graphql.clearStore();
        window.location.assign("/");
      })
      .catch(() => alert("Email ou senha inválida."));
  });
