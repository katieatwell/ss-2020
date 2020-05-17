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

function Section1Mobile() {
  const useStyles = makeStyles((theme) => homepageTheme(theme));
  const classes = useStyles();
  return (
    <Box className={classes.darkSection} zIndex="1" position="relative">
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

Section1Mobile.propTypes = {};

export default Section1Mobile;
