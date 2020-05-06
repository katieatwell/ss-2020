import React, { useLayoutEffect, useState } from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Home from "./providers/Home";
import { Navbar, Footer, ScrollToTop } from "./ui-components";
import theme from "./styles/base";
import { MuiThemeProvider } from "@material-ui/core/styles";

function App() {
  const [loaded, setLoaded] = useState(false);

  useLayoutEffect(() => {
    if (document.fonts.status === "loaded") {
      setLoaded(true);
    }
  }, []);
  return (
    <MuiThemeProvider theme={theme}>
      <ScrollToTop />
      <Navbar loaded={loaded} />
      <Switch>
        <Route component={Home} path="/" loaded={loaded} />
      </Switch>
      <Footer />
    </MuiThemeProvider>
  );
}

export default App;
