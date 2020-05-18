import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#fff",
      main: "#26c0d4",
      dark: "#222",
      contrastText: "#222",
    },
    secondary: {
      light: "#d3972c",
      main: "#d46d9a",
      dark: "#ca202d",
      contrastText: "#fff",
    },
  },
  shape: {
    borderRadius: "0",
  },
  typography: {
    h1: {
      fontFamily: '"Abhaya Libre", serif',
      fontWeight: 600,
      letterSpacing: "2.4px",
      fontSize: "6rem",
      lineHeight: 1.167,
    },
    h2: {
      fontFamily: '"Abhaya Libre", serif',
      fontWeight: 600,
      fontSize: "3.75rem",
      lineHeight: 1.3,
      letterSpacing: "1.3px",
    },
    h3: {
      fontFamily: '"Work Sans", serif',
      fontSize: "1.38rem",
      letterSpacing: ".3px",
    },
    h4: {
      fontFamily: '"Work Sans", sans-serif',
      fontWeight: 600,
      fontSize: "1.125rem",
      textTransform: "uppercase",
      lineHeight: 1.167,
      letterSpacing: ".8px",
    },
    h5: {
      fontFamily: '"Abhaya Libre", serif',
      fontSize: "2rem",
      fontWeight: 600,
    },
    body1: {
      fontFamily: '"Work Sans", sans-serif',
      lineHeight: 2,
    },
  },
});

export default theme;
