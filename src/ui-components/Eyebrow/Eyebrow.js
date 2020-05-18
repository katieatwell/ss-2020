import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Button } from "@material-ui/core";
import "./eyebrow.scss";

function Eyebrow(props) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      className="eyebrow"
    >
      <Typography>
        We plan to abide by all COVID-19 related regulations and will keep this
        site updated on specific practices we will take as we get closer to
        opening.
      </Typography>
    </Box>
  );
}

Eyebrow.propTypes = {};

export default Eyebrow;
