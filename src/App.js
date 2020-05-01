import React from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Home from "./providers/Home";
import { Navbar, Footer, ScrollToTop, Parallax } from "./ui-components";
import { Box } from "@material-ui/core";
import theme from "./styles/base";
import { MuiThemeProvider } from "@material-ui/core/styles";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route component={Home} path="/" />
      </Switch>
      <Footer />
    </MuiThemeProvider>
  );
}

export default App;
