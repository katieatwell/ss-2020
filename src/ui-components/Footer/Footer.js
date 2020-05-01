import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@material-ui/core";

import logo from "../../assets/images/logo-w.png";
import "./footer.scss";

function Footer(props) {
  return (
    <footer>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-evenly"
        className="bg"
      >
        <a href="instagram.com">
          <Typography>instagram</Typography>
        </a>
        <img src={logo} className="footer-logo" />
        <a href="facebook.com">
          <Typography>facebook</Typography>
        </a>
      </Box>
    </footer>
  );
}

Footer.propTypes = {};

export default Footer;
