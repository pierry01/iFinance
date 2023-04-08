import { ApolloClient, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { RetryLink } from "@apollo/client/link/retry";
import { setContext } from "@apollo/client/link/context";
import { InMemoryCache } from "@apollo/client/cache";
import jwtDecode from "jwt-decode";
import auth from "./auth";

const setAuthorizationLink = setContext(() => ({
  headers: { authorization: auth.get() },
}));

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    const errors = graphQLErrors.map(({ message }) => message);

    if (errors.includes("UNAUTHORIZED")) {
      const token = auth.get();
      const currentTime = Date.now() / 1000;

      if (token) {
        try {
          const jwt = jwtDecode(token);
          if (jwt.exp < currentTime) auth.destroy();
        } catch (e) {
          auth.destroy();
        }
      }

      window.location.assign("/login");
    }
  }

  if (networkError) window.location.assign("/network-error");

  return null;
});

const client = new ApolloClient({
  link: from([
    errorLink,
    new RetryLink(),
    setAuthorizationLink,
    new HttpLink({ uri: "/graphql" }),
  ]),
  cache: new InMemoryCache({}),
});

export default client;
