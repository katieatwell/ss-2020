import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { formTheme } from "../../styles/formTheme";
import { buttonTheme } from "../../styles/buttonTheme";
import { Button, Typography } from "@material-ui/core";
import parse from "html-react-parser";
import "./newsletter-form.scss";
import { Icon } from "react-icons-kit";
import { ic_done } from "react-icons-kit/md/ic_done";

function NewsletterForm({ status, message, onValidated }) {
  const useStyles = makeStyles((theme) => formTheme(theme));
  const useButtonStyles = makeStyles((theme) => buttonTheme(theme));
  const classes = useStyles();
  const buttonClass = useButtonStyles();
  let email;
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    });

  useEffect(() => {
    if (status === "success") {
      email.value = "";
    }
  }, [status]);

  const successMessage = (status, message) => {
    switch (status) {
      case "sending":
        return "Submitting...";
      case "success":
        return (
          <>
            <Icon size={24} icon={ic_done} style={{ marginRight: "4px" }} />
            You have successfully subscribed!
          </>
        );
      case "error":
        return parse(message);
    }
  };

  return (
    <div>
      <input
        type="email"
        ref={(node) => (email = node)}
        className={classes.input}
        placeholder="email"
        name="email"
        required
      />
      <Button
        className={buttonClass.button}
        onClick={submit}
        type="submit"
        name="subscribe"
        value="subscribe"
      >
        Submit
      </Button>
      <Typography
        style={{ color: "#fff", marginTop: "1.6rem" }}
        variant="h4"
        component="h2"
        className="success-message"
      >
        {successMessage(status, message)}
      </Typography>
    </div>
  );
}

NewsletterForm.propTypes = {};

export default NewsletterForm;
