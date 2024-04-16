import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./theme/GlobalStyle.jsx";
import { theme } from "./theme/colors.jsx";
import AppRoutes from "./AppRoutes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  </React.StrictMode>
);
