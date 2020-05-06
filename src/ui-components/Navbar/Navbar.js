import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Logo from "../../assets/images/logo-b.png";
import { Box } from "@material-ui/core";
import "./navbar.scss";

function Navbar({ loaded }) {
  const [loadLogo, setLoadLogo] = useState("");
  useEffect(() => {
    setLoadLogo("loaded");
  }, [loaded]);

  const logoClassName = ["logo", loadLogo].join(" ");
  return (
    <Box className="logo-container">
      <img src={Logo} alt="Summit Seltzer Logo" className={logoClassName} />
    </Box>
  );
}

Navbar.propTypes = {};

export default Navbar;
