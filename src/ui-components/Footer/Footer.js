import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Button } from "@material-ui/core";
import logo from "../../assets/images/logo-w.png";
import { makeStyles } from "@material-ui/core/styles";
import { formTheme } from "../../styles/formTheme";
import { buttonTheme } from "../../styles/buttonTheme";

import "./footer.scss";

function Footer({ className }) {
  const useStyles = makeStyles((theme) => formTheme(theme));
  const useButtonStyles = makeStyles((theme) => buttonTheme(theme));
  const classes = useStyles();
  const buttonClass = useButtonStyles();
  return (
    <footer className={className}>
      <Box className="bg" padding="6% 8%">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          maxWidth="1240px"
          margin="auto"
          className="container"
        >
          <Box
            display="flex"
            flexDirection="column"
            className="logo-container-footer"
          >
            <img
              src={logo}
              className="footer-logo"
              style={{ marginBottom: "2rem" }}
            />
            <Box display="flex" justifyContent="space-between">
              <a
                href="https://www.facebook.com/SummitSeltzerCo"
                target="_blank"
              >
                <Typography>facebook</Typography>
              </a>
              <a
                href="https://www.instagram.com/summitseltzer/"
                target="_blank"
              >
                <Typography>instagram</Typography>
              </a>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            className="newsletter-container"
          >
            <Typography
              style={{ color: "#fff", marginBottom: "1.6rem" }}
              variant="h4"
              component="h2"
            >
              Stay in the know.
            </Typography>
            <div>
              <form
                action="https://summitseltzer.us18.list-manage.com/subscribe/post?u=28efb3d3231757bc5504e2169&amp;id=53126e1f3b"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                class="validate"
                target="_blank"
                novalidate
              >
                <input
                  type="email"
                  className={classes.input}
                  placeholder="email"
                  name="email"
                  required
                />
                <div
                  style={{ position: "absolute", left: "-5000px" }}
                  ariaHidden="true"
                >
                  <input
                    type="text"
                    name="b_28efb3d3231757bc5504e2169_53126e1f3b"
                    tabIndex="-1"
                    value=""
                  />
                </div>
                <Button
                  className={buttonClass.button}
                  type="submit"
                  name="subscribe"
                  value="subscribe"
                >
                  Submit
                </Button>
              </form>
            </div>
          </Box>
        </Box>
      </Box>
    </footer>
  );
}

Footer.propTypes = {};

export default Footer;
