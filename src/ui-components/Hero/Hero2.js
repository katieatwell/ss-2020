import React, { useState } from "react";
import PropTypes from "prop-types";
import { useMediaQuery } from "../../utils/mediaQueryHook";
import HeroParallax from "./HeroParallax";
import HeroMobile from "./HeroMobile";
import "./hero.scss";

function Hero(props) {
  const tablet = useMediaQuery("(max-width: 991px)");

  return tablet ? <HeroMobile /> : <HeroParallax />;
}

Hero.propTypes = {};

export default Hero;
