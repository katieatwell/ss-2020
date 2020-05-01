import React from "react";
import PropTypes from "prop-types";
import Logo from "../../assets/images/logo-b.png";
import { Box } from "@material-ui/core";
import "./navbar.scss";

function Navbar(props) {
  return (
    <Box className="logo-container">
      <img src={Logo} alt="Summit Seltzer Logo" className="logo" />
    </Box>
  );
}

Navbar.propTypes = {};

export default Navbar;
