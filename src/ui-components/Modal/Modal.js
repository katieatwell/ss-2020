import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, Backdrop, Typography, Button, Box } from "@material-ui/core";
import { useSpring, animated } from "react-spring/web.cjs";
import { buttonTheme } from "../../styles/buttonTheme";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "60%",
    margin: "auto",
    "&:focus": {
      outlineColor: "#fff",
    },
    "@media(max-width: 600px)": {
      width: "99%",
      top: "6%",
    },
  },
  title: {
    "@media(max-width: 600px)": {
      lineHeight: "1",
      fontSize: "3rem",
    },
  },
  outline: {
    "&:focus": {
      outlineColor: "#fff",
    },
  },
  backdrop: {
    backgroundColor: "rgba(255, 255, 255, .9)",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow:
      "0 2.8px 2.2px rgba(0, 0, 0, 0.02), 0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),0 22.3px 17.9px rgba(0, 0, 0, 0.042),0 41.8px 33.4px rgba(0, 0, 0, 0.05), 0 100px 80px rgba(0, 0, 0, 0.07)",
    padding: theme.spacing(2, 4, 3),
    "&:focus": {
      outlineColor: "#fff",
    },
  },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

export default function SpringModal({
  open,
  handleClose,
  title,
  content,
  buttonTitle,
}) {
  const classes = useStyles();
  const useButtonStyles = makeStyles((theme) => buttonTheme(theme));
  const buttonClass = useButtonStyles();
  return (
    <div className={classes.outline}>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
          className: classes.backdrop,
        }}
      >
        <Fade in={open}>
          <Box className={classes.paper} display="flex" flexDirection="column">
            <Typography
              component="h2"
              variant="h2"
              className={classes.title}
              id="spring-modal-title"
              style={{ marginBottom: "1.2rem" }}
            >
              {title}
            </Typography>
            <Typography
              id="spring-modal-description"
              style={{ marginBottom: "1.2rem" }}
            >
              {content}
            </Typography>
            {buttonTitle && (
              <Button
                onClick={handleClose}
                className={buttonClass.buttonOutline}
                style={{ marginLeft: "auto" }}
              >
                {buttonTitle}
              </Button>
            )}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
