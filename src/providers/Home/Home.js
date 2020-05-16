import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Hero, Image } from "../../ui-components";
import { Box, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import section2Image from "../../assets/images/coffees.png";
import section2ImageWebp from "../../assets/images/coffees.webp";
import blobLeftLg from "../../assets/images/splash-blob-left.svg";
import blobLeftSm from "../../assets/images/circle-blob.svg";
import blobRightMed from "../../assets/images/small-blob.png";
import craftedStampLg from "../../assets/images/ss-crafted-mtn.png";
import craftedStampLgWebp from "../../assets/images/ss-crafted-mtn.webp";
import headshot from "../../assets/images/headshot.jpg";
import headshotWebp from "../../assets/images/headshot.jpg";
import { homepageTheme } from "./theme";
import { buttonTheme } from "../../styles/buttonTheme";
import ssBlue from "../../assets/images/ss-blue.png";
import ssBlueWebp from "../../assets/images/ss-blue.webp";
import cocktail from "../../assets/images/soda-drink.png";
import cocktailWebp from "../../assets/images/soda-drink.webp";
import whiteStamp from "../../assets/images/ss-crafted.png";
import whiteStampWebp from "../../assets/images/ss-crafted.webp";
import imgTop from "../../assets/images/coffee.png";
import imgTopWebp from "../../assets/images/coffee.webp";
import imgBottom from "../../assets/images/campers.png";
import imgBottomWebp from "../../assets/images/campers.webp";
import "./home.scss";

function Home({ loaded }) {
  const useStyles = makeStyles((theme) => homepageTheme(theme));
  const useButtonStyles = makeStyles((theme) => buttonTheme(theme));
  const classes = useStyles();
  const buttonClass = useButtonStyles();
  const [loadHome, setLoadHome] = useState("");
  useEffect(() => {
    setLoadHome("loaded");
  }, [loaded]);

  const homeClassName = ["home-wrap", loadHome].join(" ");
  return (
    <div className={homeClassName}>
      <Hero />
      <Box className={classes.darkSection} zIndex="1" position="relative">
        <Box className="section-1-inner">
          <Box className="content-left">
            <Typography>
              We believe being healthy and having fun can go hand in hand. Which
              is why we created a space for everyone to enjoy our
              house-fermented, crystal-clear hard seltzer together. It's like a
              brewery but for seltzer. A seltzery.
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

              <img src={blobLeftLg} className="blob-left-lg" />
              <img src={blobLeftSm} className="blob-left-sm" />
            </Box>
          </Box>
          <Box width="46%" className="content-right">
            <Typography>
              Summit Seltzery is a place made for full-on living. Our craft hard
              seltzer is a delicious adult beverage, sure. But it’s also the
              sidekick to your next adventure. This means your weekend routine
              just got a whole lot more fun. So did after-work drinks. Switch up
              your gym workout with a seltzery workout (daily yoga, run club,
              maybe even silent disco pilates). Kick your buddy’s butt at
              foosball or discover you’re ridiculously good at badminton (who
              knew?). Maybe find yourself getting inspired to pick up a
              paintbrush again while you’re admiring our rotating collection of
              local art.
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
      <Box>
        <Box className="section-2-inner">
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
        </Box>
      </Box>
      <Box
        className={classes.darkSection}
        zIndex="1"
        position="relative"
        display="flex"
        flexDirection="row"
      >
        <img className="blob-right-med" src={blobRightMed} />
        <Box className="section-3-inner">
          <Box className="content-left">
            <Typography variant="h1" component="h2" className={classes.header1}>
              See you <br />
              this summer.
            </Typography>
            <Typography variant="h4" component="h3" className={classes.h4}>
              2215 Thrift Rd. Suite B <br />
              Charlotte NC 28208
            </Typography>
            <br />
            <Typography variant="h2" component="h3" className={classes.h3}>
              Media and <br />
              general inquiries.
            </Typography>
            <a href="mailto:kristin@summitseltzer.com" className="link">
              <Button className={buttonClass.button}>Contact</Button>
            </a>
          </Box>
          <Box className="content-right">
            <Image
              className="img-top"
              webp={{ src: imgTopWebp }}
              fallback={{
                src: imgTop,
                type: "png",
                alt: "Woman drinking from mug at sunset",
              }}
            />
            <Image
              className="img-bottom"
              webp={{ src: imgBottomWebp }}
              fallback={{
                src: imgBottom,
                type: "png",
                alt: "Two hikers",
              }}
            />
            <Image
              className="white-stamp"
              webp={{ src: whiteStampWebp }}
              fallback={{
                src: whiteStamp,
                type: "png",
                alt: "White Summit Seltzer Stamp",
              }}
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
}

Home.propTypes = {};

export default Home;
