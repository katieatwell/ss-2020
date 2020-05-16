import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Button } from "@material-ui/core";
import NewsletterForm from "../NewsletterForm";
import logo from "../../assets/images/logo-w.png";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import "./footer.scss";

function Footer({ className }) {
  const url =
    "https://summitseltzer.us18.list-manage.com/subscribe/post?u=28efb3d3231757bc5504e2169&amp;id=53126e1f3b";
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

            <MailchimpSubscribe
              url={url}
              render={({ subscribe, status, message }) => (
                <NewsletterForm
                  status={status}
                  message={message}
                  onValidated={(formData) => subscribe(formData)}
                />
              )}
            />
          </Box>
        </Box>
      </Box>
    </footer>
  );
}

Footer.propTypes = {};

export default Footer;
