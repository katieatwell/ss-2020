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

function Section2Mobile(props) {
  const useStyles = makeStyles((theme) => homepageTheme(theme));
  const classes = useStyles();
  return (
    <Box>
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
              <img className="blob-right-lg" src={blobLeftLg} />
              <img className="blob-right-sm" src={blobLeftSm} />
            </Box>
          </Box>
        </Box>
        <img src={blobRightMed} className="blob-right-med" />
      </Box>
    </Box>
  );
}

Section2Mobile.propTypes = {};

export default Section2Mobile;
