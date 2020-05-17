import React from "react";
import PropTypes from "prop-types";
import Section1Desktop from "./Section1Desktop";
import Section1Mobile from "./Section1Mobile";
import { useMediaQuery } from "../../../utils/mediaQueryHook";

import "./section-one.scss";

function Section1(props) {
  const tablet = useMediaQuery("(max-width: 991px)");

  return tablet ? <Section1Mobile /> : <Section1Desktop />;
}

Section1.propTypes = {};

export default Section1;
