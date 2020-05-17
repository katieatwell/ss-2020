import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Image } from "../../../ui-components";
import { Box, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { homepageTheme } from "../../../providers/Home/theme";
import section2Image from "../../../assets/images/coffees.png";
import section2ImageWebp from "../../../assets/images/coffees.webp";
import craftedStampLg from "../../../assets/images/ss-crafted-mtn.png";
import craftedStampLgWebp from "../../../assets/images/ss-crafted-mtn.webp";
import blobLeftLg from "../../../assets/images/splash-blob-left.svg";
import blobLeftSm from "../../../assets/images/circle-blob.svg";
import { useSpring, animated } from "react-spring/web.cjs";
const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 20}px,${y / -26}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 16}px,${y / 16}px,0)`;

function Section1Desktop() {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));
  const useStyles = makeStyles((theme) => homepageTheme(theme));
  const classes = useStyles();
  return (
    <Box
      className={classes.darkSection}
      zIndex="1"
      position="relative"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <Box className="section-1-inner">
        <Box className="content-left">
          <Typography>
            We believe being healthy and having fun can go hand in hand. Which
            is why we created a space for everyone to enjoy our house-fermented,
            crystal-clear hard seltzer together. It's like a brewery but for
            seltzer. A seltzery.
          </Typography>
          <Box className="image-container">
            <div className="main-image">
              <Image
                cover
                webp={{ src: section2ImageWebp }}
                fallback={{
                  src: section2Image,
                  type: "png",
                  alt: "People holding coffee cups",
                }}
              />
            </div>
            <animated.div
              className="blob-left-lg"
              style={{ transform: props.xy.interpolate(trans4) }}
            >
              <img src={blobLeftLg} />
            </animated.div>
            <animated.div
              className="blob-left-sm"
              style={{ transform: props.xy.interpolate(trans1) }}
            >
              <img src={blobLeftSm} />
            </animated.div>
          </Box>
        </Box>
        <Box width="46%" className="content-right">
          <Typography>
            Summit Seltzery is a place made for full-on living. Our craft hard
            seltzer is a delicious adult beverage, sure. But it’s also the
            sidekick to your next adventure. This means your weekend routine
            just got a whole lot more fun. So did after-work drinks. Switch up
            your gym workout with a seltzery workout (daily yoga, run club,
            maybe even silent disco pilates). Kick your buddy’s butt at foosball
            or discover you’re ridiculously good at badminton (who knew?). Maybe
            find yourself getting inspired to pick up a paintbrush again while
            you’re admiring our rotating collection of local art.
          </Typography>
          <Typography variant="h2" component="h2" className={classes.h2}>
            Whatever your next adventure is, we'll make sure it's a fun one.
          </Typography>
          <Image
            className="mtn-stamp"
            webp={{ src: craftedStampLgWebp }}
            fallback={{
              src: craftedStampLg,
              type: "png",
              alt: "Outline of Mountain Range",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

Section1Desktop.propTypes = {};

export default Section1Desktop;
