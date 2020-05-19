import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { buttonTheme } from "../../styles/buttonTheme";
import { makeStyles } from "@material-ui/core/styles";
import "./notfound.scss";

function NotFound(props) {
  const useButtonStyles = makeStyles((theme) => buttonTheme(theme));
  const buttonClass = useButtonStyles();
  return (
    <Box
      className="not-found-container"
      justifyContent="center"
      alignItems="center"
      display="flex"
      position="absolute"
      flexDirection="column"
      width="100%"
      right="0"
      left="0"
    >
      <Typography variant="h1" component="h1">
        Oops!
      </Typography>
      <Typography variant="h3" component="h3">
        Sorry, we can't seem to find what you are looking for.
      </Typography>
      <Link to="/">
        <Button className={buttonClass.buttonOutline}>Home</Button>
      </Link>
    </Box>
  );
}

NotFound.propTypes = {};

export default NotFound;
