import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@material-ui/core";
import { Image } from "../index";
import { makeStyles } from "@material-ui/core/styles";
import heroImgWebp from "../../assets/images/hero-image.webp";
import heroImg from "../../assets/images/hero-image.png";
import Blob1 from "../../assets/images/small-blob.svg";
import Blob2 from "../../assets/images/long-blob.svg";
import "./hero.scss";
import { useSpring, animated } from "react-spring/web.cjs";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 20}px,${y / -26}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 8 - 250}px,${y / 8 - 200}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 16}px,${y / 16}px,0)`;

function HeroParallax() {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.primary.light,
    },
  }));
  const classes = useStyles();
  return (
    <Box
      className={[classes.root, "hero-container"].join(" ")}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <Box className="content-left">
        <Typography variant="h1" component="h1">
          Charlotte's first true seltzery.
        </Typography>
        <Typography variant="h4" component="h2">
          Coming to you summer 2020
        </Typography>
      </Box>
      <Box className="content-right">
        <div class="image-container">
          <animated.div
            className="blob-top"
            style={{ transform: props.xy.interpolate(trans4) }}
          >
            <img src={Blob1} />
          </animated.div>
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
          <animated.div
            className="blob-bottom"
            style={{ transform: props.xy.interpolate(trans3) }}
          >
            <img src={Blob2} />
          </animated.div>
        </div>
      </Box>
    </Box>
  );
}

HeroParallax.propTypes = {};

export default HeroParallax;
