import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import { Toaster } from "react-hot-toast";

import "./index.css";
import App from "./App";
import client from "./apollo/client";

createRoot(document.getElementById("root")).render(
  <StrictMode>
  <ApolloProvider client={client}>
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 2500,

        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },

        success: {
          iconTheme: {
            primary: "#4CAF50",
            secondary: "#fff",
          },
        },

        error: {
          iconTheme: {
            primary: "#f44336",
            secondary: "#fff",
          },
        },
      }}
    />
    <App />
  </ApolloProvider>
</StrictMode>
);