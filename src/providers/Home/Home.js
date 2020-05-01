import React from "react";
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
import ssBlue from "../../assets/images/ss-blue.png";
import cocktail from "../../assets/images/soda-drink.png";
import imgTop from "../../assets/images/coffee.png";
import imgBottom from "../../assets/images/campers.png";
import "./home.scss";

function Home(props) {
  const useStyles = makeStyles((theme) => homepageTheme(theme));
  const classes = useStyles();
  return (
    <>
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
              I'm baby kombucha fixie activated charcoal, quinoa vice pabst
              tumeric brooklyn bushwick wayfarers before they sold out. Tousled
              shabby chic hoodie next level palo santo cliche forage salvia
              tattooed yuccie pitchfork kitsch. Kogi chartreuse kickstarter
              bitters, gluten-free live-edge DIY whatever pinterest. Tote bag
              salvia hell of, scenester +1 meh listicle master cleanse unicorn
              offal. Food truck DIY man braid, brunch gluten-free coloring book
              mustache franzen banjo poke thundercats cornhole. Tumblr forage
              lyft celiac before they sold out unicorn banh mi shoreditch
              snackwave intelligentsia occupy tofu art party helvetica. Raclette
              leggings offal polaroid 8-bit wolf pinterest kombucha succulents
              jianbing letterpress.
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
                Reach for something different. Like one of these house
                favorites.
              </Typography>
              <Typography variant="h3" component="h3">
                In addition to draft seltzers we will also have a variety of
                speciality cocktails.
              </Typography>
              <Typography>Menu coming soon!!</Typography>
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
              See you this <br />
              summer.
            </Typography>
            <Typography variant="h4" component="h3" className={classes.h4}>
              123 Address St. <br />
              Charlotte NC 28123
            </Typography>
            <br />
            <Typography variant="h2" component="h3" className={classes.h3}>
              Media and <br />
              general inquiries.
            </Typography>
            <a href="mailto:kristincagney@summitseltzer.com">
              <Button className={classes.button}>Contact</Button>
            </a>
          </Box>
          <Box className="content-right">
            <img src={imgTop} className="img-top" />
            <img src={imgBottom} className="img-bottom" />
          </Box>
        </Box>
      </Box>
    </>
  );
}

Home.propTypes = {};

export default Home;
