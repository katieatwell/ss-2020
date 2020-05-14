import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Hero } from "../../ui-components";
import { Box, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import section2Image from "../../assets/images/coffees.png";
import blobLeftLg from "../../assets/images/splash-blob-left.png";
import blobLeftSm from "../../assets/images/circle-blob.png";
import blobRightMed from "../../assets/images/small-blob.png";
import craftedStampLg from "../../assets/images/ss-crafted-mtn.png";
import headshot from "../../assets/images/headshot.png";
import { homepageTheme } from "./theme";
import { buttonTheme } from "../../styles/buttonTheme";
import ssBlue from "../../assets/images/ss-blue.png";
import cocktail from "../../assets/images/soda-drink.png";
import whiteStamp from "../../assets/images/ss-crafted.png";
import imgTop from "../../assets/images/coffee.png";
import imgBottom from "../../assets/images/campers.png";
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
                <img src={section2Image} />
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
            <img src={craftedStampLg} className="mtn-stamp" />
          </Box>
        </Box>
      </Box>
      <Box>
        <Box className="section-2-inner">
          <div className="headshot-container">
            <img src={headshot} />
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
            // maxWidth="84%"
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
            <img src={ssBlue} className="ss-stamp-blue" />
            <Box className="content-right">
              <Box className="drink-container">
                <img src={cocktail} className="cocktail" />
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
            <a href="mailto:kristin@summitseltzer.com">
              <Button className={buttonClass.button}>Contact</Button>
            </a>
          </Box>
          <Box className="content-right">
            <img src={imgTop} className="img-top" />
            <img src={imgBottom} className="img-bottom" />
            <img src={whiteStamp} className="white-stamp" />
          </Box>
        </Box>
      </Box>
    </div>
  );
}

Home.propTypes = {};

export default Home;
