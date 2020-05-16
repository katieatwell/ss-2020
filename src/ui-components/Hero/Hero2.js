import React, { useState } from "react";
import PropTypes from "prop-types";
import { useMediaQuery } from "../../utils/mediaQueryHook";
import { Box, Typography } from "@material-ui/core";
import { Image } from "../index";
import { makeStyles } from "@material-ui/core/styles";
import heroImgWebp from "../../assets/images/hero-image.webp";
import heroImg from "../../assets/images/hero-image.png";
import Blob1 from "../../assets/images/small-blob.svg";
import Blob2 from "../../assets/images/long-blob.svg";
import "./hero.scss";

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
        <div className="image-container">
          <img src={Blob1} className="blob-top" />
          <Image
            className="main-image"
            id="main-image"
            webp={{ src: heroImgWebp }}
            fallback={{
              src: heroImg,
              type: "png",
              alt: "People enjoying drinks",
            }}
          />
          <img src={Blob2} className="blob-bottom" />
        </div>
      </Box>
    </Box>
  );
}

Hero.propTypes = {};

export default Hero;
