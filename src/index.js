import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";

import App from "./App";
import { defaultTheme } from "./styleTemplates";

import "./global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={defaultTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
