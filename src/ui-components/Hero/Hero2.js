import React, { useState } from "react";
import PropTypes from "prop-types";
import { useMediaQuery } from "../../utils/mediaQueryHook";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import heroImg from "../../assets/images/hero-image.png";
import Blob1 from "../../assets/images/small-blob.png";
import Blob2 from "../../assets/images/long-blob.png";
import "./hero.scss";
import ParallaxMousemove from "react-parallax-mousemove";

const imageContainerStyle = {
  width: "92%",
  position: "relative",
  maxHeight: "84%",
};
const blob1Style = {
  position: "absolute",
  transform: "translate3D(-34%, -350%, 0)",
};
const blob2Style = {
  position: "absolute",
  transform: "translate3D(120%, 0%, 0)",
  height: "140px",
};
const mainImageStyle = {
  // height: "100%",
  // width: "100%",
  // objectFit: "cover",
  zIndex: "2",
  position: "relative",
  // borderRadius: "4px",
  // boxShadow:
  //   "0 2.8px 2.2px rgba(0, 0, 0, 0.02), 0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035), 0 22.3px 17.9px rgba(0, 0, 0, 0.042),0 41.8px 33.4px rgba(0, 0, 0, 0.05), 0 100px 80px rgba(0, 0, 0, 0.07)",
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
              xFactor: 0.03,
              yFactor: 0.022,
              springSettings: {
                stiffness: 90,
                damping: 20,
              },
            }}
          >
            <img src={Blob1} />
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
