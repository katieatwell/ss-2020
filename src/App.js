import React, { useLayoutEffect, useState } from "react";
import "./App.scss";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "./providers/Home";
import NotFound from "./providers/NotFound";
import { Navbar, Footer, ScrollToTop, SpringModal } from "./ui-components";
import theme from "./styles/base";
import { MuiThemeProvider } from "@material-ui/core/styles";

function App() {
  const [loaded, setLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false);

  let location = useLocation();

  useLayoutEffect(() => {
    if (document.fonts.status === "loaded") {
      setLoaded(true);
    }
    setShowModal(true);
  }, []);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <MuiThemeProvider theme={theme}>
      <ScrollToTop />
      <Navbar loaded={loaded} />
      <SpringModal
        open={showModal}
        handleClose={handleClose}
        title="Our Covid-19 Response"
        buttonTitle={"Okay!"}
        content="Locavore blog food truck, shoreditch tofu +1 kombucha twee
              letterpress meh asymmetrical. Aesthetic tumeric cornhole, etsy
              food truck gluten-free craft beer. Air plant raw denim man braid
              polaroid lo-fi, drinking vinegar everyday carry. Sustainable
              meditation chartreuse kogi. Neutra mumblecore single-origin coffee
              meditation activated charcoal tofu slow-carb man braid af banjo
              echo park selfies."
      />
      <Switch>
        <Route component={Home} exact path="/" loaded={loaded} />
        <Route component={NotFound} />
      </Switch>
      <Footer className={location.pathname !== "/" ? "not-found" : ""} />
    </MuiThemeProvider>
  );
}

export default App;
