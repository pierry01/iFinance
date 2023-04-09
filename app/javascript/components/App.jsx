import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import graphql from "config/graphql";
import Routes from "components/Routes";

function App() {
  return (
    <StrictMode>
      <ApolloProvider client={graphql}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ApolloProvider>
    </StrictMode>
  );
}

const container = document.getElementById("App");
const root = createRoot(container);

root.render(<App />);

export default App;
