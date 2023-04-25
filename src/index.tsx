import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./styles/global";
import client from "./services/api";
import { ApolloProvider } from "@apollo/client";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <GlobalStyle />
      <App />
    </ApolloProvider>
  </React.StrictMode>,
);
