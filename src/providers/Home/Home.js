import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Hero, Image } from "../../ui-components";
import { Box, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Section1, Section2 } from "../../consumers/Home";
import { homepageTheme } from "./theme";
import { buttonTheme } from "../../styles/buttonTheme";
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
      <Section1 />
      <Section2 />
      <Box
        className={classes.darkSection}
        zIndex="1"
        position="relative"
        display="flex"
        flexDirection="row"
      >
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
