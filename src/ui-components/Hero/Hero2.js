import React, { useState } from "react";
import PropTypes from "prop-types";
import { useMediaQuery } from "../../utils/mediaQueryHook";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import heroImg from "../../assets/images/hero-image.png";
import Blob1 from "../../assets/images/top-1.svg";
import Blob2 from "../../assets/images/top-2.svg";
import "./hero.scss";
import ParallaxMousemove from "react-parallax-mousemove";

const imageContainerStyle = {
  width: "92%",
  position: "relative",
  maxHeight: "84%",
};
const blob1Style = {
  position: "absolute",
  transform: "translate3d(-34%, -356%, 0px)",
};
const blob2Style = {
  position: "absolute",
  transform: "translate3D(120%, 0%, 0)",
  height: "140px",
};

function Hero(props) {
  const tablet = useMediaQuery("(max-width: 991px)");
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.primary.light,
    },
  }));
  const classes = useStyles();
  return (
    <Box className={[classes.root, "hero-container"].join(" ")}>
      <Box className="content-left">
        <Typography variant="h1" component="h1">
          Charlotte's first true seltzery.
        </Typography>
        <Typography variant="h4" component="h2">
          Coming to you summer 2020
        </Typography>
      </Box>
      <Box className="content-right">
        <ParallaxMousemove
          containerStyle={imageContainerStyle}
          fullHeight={false}
        >
          <ParallaxMousemove.Layer
            layerStyle={blob1Style}
            config={{
              xFactor: 0.034,
              yFactor: 0.034,
              springSettings: {
                stiffness: 180,
                damping: 10,
              },
            }}
          >
            <img src={Blob1} style={{ height: "120px" }} />
          </ParallaxMousemove.Layer>

          <img
            src={heroImg}
            alt="People on a porch"
            id="main-image"
            className="main-image"
          />

          <ParallaxMousemove.Layer
            layerStyle={blob2Style}
            config={{
              xFactor: 0.03,
              yFactor: 0.03,
              springSettings: {
                stiffness: 80,
                damping: 24,
              },
            }}
          >
            <img src={Blob2} style={{ height: "300px" }} />
          </ParallaxMousemove.Layer>
        </ParallaxMousemove>
      </Box>
    </Box>
  );
}

Hero.propTypes = {};

export default Hero;
