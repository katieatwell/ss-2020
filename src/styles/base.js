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
      letterSpacing: "6px",
      fontSize: "6rem",
      lineHeight: 1.167,
    },
    h2: {
      fontFamily: '"Abhaya Libre", serif',
      fontWeight: 600,
      fontSize: "2.8rem",
      lineHeight: 1.3,
    },
    h3: {
      fontFamily: '"Work Sans", serif',
      fontSize: "1.4rem",
    },
    h4: {
      fontFamily: '"Work Sans", sans-serif',
      fontWeight: 600,
      fontSize: "1rem",
      textTransform: "uppercase",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
    },
    body1: {
      fontFamily: '"Work Sans", sans-serif',
      lineHeight: 2,
    },
  },
});

export default theme;
