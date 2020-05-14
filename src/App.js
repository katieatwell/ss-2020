import React, { useLayoutEffect, useState } from "react";
import "./App.scss";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "./providers/Home";
import NotFound from "./providers/NotFound";
import { Navbar, Footer, ScrollToTop } from "./ui-components";
import theme from "./styles/base";
import { MuiThemeProvider } from "@material-ui/core/styles";

function App() {
  const [loaded, setLoaded] = useState(false);
  let location = useLocation();
  useLayoutEffect(() => {
    if (document.fonts.status === "loaded") {
      setLoaded(true);
    }
    console.log(location);
  }, []);
  return (
    <MuiThemeProvider theme={theme}>
      <ScrollToTop />
      <Navbar loaded={loaded} />
      <Switch>
        <Route component={Home} exact path="/" loaded={loaded} />
        <Route component={NotFound} />
      </Switch>
      <Footer className={location.pathname !== "/" ? "not-found" : ""} />
    </MuiThemeProvider>
  );
}

export default App;
