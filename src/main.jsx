import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "styled-components";
import App from "./App.jsx";

import { GlobalStyle } from "./theme/GlobalStyle.jsx";
import { theme } from "./theme/colors.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
