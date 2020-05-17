import React from "react";
import PropTypes from "prop-types";
import Section2Desktop from "./Section2Desktop";
import Section2Mobile from "./Section2Mobile";
import { useMediaQuery } from "../../../utils/mediaQueryHook";
import "./section-two.scss";

function Section2(props) {
  const tablet = useMediaQuery("(max-width: 991px)");

  return tablet ? <Section2Mobile /> : <Section2Desktop />;
}

Section2.propTypes = {};

export default Section2;
