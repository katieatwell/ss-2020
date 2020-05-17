import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Image } from "../../../ui-components";
import { Box, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { homepageTheme } from "../../../providers/Home/theme";
import ssBlue from "../../../assets/images/ss-blue.png";
import ssBlueWebp from "../../../assets/images/ss-blue.webp";
import cocktail from "../../../assets/images/soda-drink.png";
import cocktailWebp from "../../../assets/images/soda-drink.webp";
import headshot from "../../../assets/images/headshot.jpg";
import headshotWebp from "../../../assets/images/headshot.jpg";
import blobLeftLg from "../../../assets/images/large-cocktail-blob.svg";
import blobRightMed from "../../../assets/images/small-blob.svg";
import blobLeftSm from "../../../assets/images/circle-blob.svg";
import { useSpring, animated } from "react-spring/web.cjs";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 20}px,${y / -26}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 16}px,${y / 16}px,0)`;

function Section2Desktop() {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));
  const useStyles = makeStyles((theme) => homepageTheme(theme));
  const classes = useStyles();
  return (
    <Box onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      <Box className="section-2-inner" position="relative">
        <div className="headshot-container">
          <Image
            webp={{ src: headshotWebp }}
            fallback={{
              src: headshot,
              type: "png",
              alt: "Kristin Cagney, headshot",
            }}
          />
        </div>
        <Typography
          variant="h1"
          component="h2"
          className={[classes.h1, "section-2-header"].join(" ")}
        >
          Have some fun. Do some good. <br /> Live your life.
        </Typography>
        <Typography variant="h4" component="h3" className={classes.h4}>
          -- Kristin Cagney, Founder
        </Typography>
        <Box
          display="flex"
          alignItems="flex-start"
          justifyContent="space-between"
          margin="12% auto 2%"
          position="relative"
          flexWrap="wrap"
        >
          <Box className="content-left">
            <Typography variant="h2" component="h2">
              Reach for something <br />
              different. Like one of
              <br />
              these house favorites.
            </Typography>
            <Typography variant="h3" component="h3">
              In addition to draft seltzers we will also have a variety of
              speciality seltzer based cocktails.
            </Typography>
            <Typography variant="h5">Menu coming soon!!</Typography>
          </Box>
          <Image
            className="ss-stamp-blue"
            webp={{ src: ssBlueWebp }}
            fallback={{
              src: ssBlue,
              type: "png",
              alt: "Summit Seltzer Stamp",
            }}
          />
          <Box className="content-right">
            <Box className="drink-container">
              <Image
                className="cocktail"
                webp={{ src: cocktailWebp }}
                fallback={{
                  src: cocktail,
                  type: "png",
                  alt: "Seltzer Cocktail",
                }}
              />
              <animated.div
                className="blob-right-lg"
                style={{ transform: props.xy.interpolate(trans1) }}
              >
                <img src={blobLeftLg} />
              </animated.div>
              <animated.div
                className="blob-right-sm"
                style={{ transform: props.xy.interpolate(trans3) }}
              >
                <img src={blobLeftSm} />
              </animated.div>
            </Box>
          </Box>
        </Box>
        <animated.div
          className="blob-right-med"
          style={{ transform: props.xy.interpolate(trans4) }}
        >
          <img src={blobRightMed} />
        </animated.div>
      </Box>
    </Box>
  );
}

Section2Desktop.propTypes = {};

export default Section2Desktop;
