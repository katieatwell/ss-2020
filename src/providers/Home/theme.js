export const homepageTheme = (theme) => {
  return {
    button: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.light,
      letterSpacing: 1.2,
      fontWeight: "bold",
      fontSize: "16px",
      width: 200,
      padding: "10px 0",
      transition: "all 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67)",
      boxShadow:
        "0 2.8px 2.2px rgba(0, 0, 0, 0.02), 0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),0 22.3px 17.9px rgba(0, 0, 0, 0.042),0 41.8px 33.4px rgba(0, 0, 0, 0.05), 0 100px 80px rgba(0, 0, 0, 0.07)",
      "&:hover": {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.main,
      },
    },
    darkSection: {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.primary.light,
      padding: "8%",
      maxWidth: "100%",
      boxShadow:
        "0 2.8px 2.2px rgba(0, 0, 0, 0.02), 0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),0 22.3px 17.9px rgba(0, 0, 0, 0.042),0 41.8px 33.4px rgba(0, 0, 0, 0.05), 0 100px 80px rgba(0, 0, 0, 0.07)",
    },

    imageSm: {
      position: "absolute",
      zIndex: "1",
      left: "-60%",
      transform: "rotate(140deg)",
      bottom: "-50%",
    },
    list: {
      margin: "8% 0 0",
    },
    listItem: {
      margin: "3% 0 0",
    },
    listItemTitle: {
      marginBottom: "1%",
    },

    h1: {
      fontSize: "3.8rem",
      lineHeight: 1.6,
      textAlign: "center",
      letterSpacing: "2px",
      marginTop: "4rem",
    },
    header1: {
      fontSize: "5rem",
    },
    h2: {
      color: theme.palette.primary.main,
      marginTop: "2rem",
    },
    h3: {
      margin: "6rem 0 2rem 0",
    },
    h4: {
      color: theme.palette.primary.main,
      fontWeight: 600,
      marginTop: "1.4rem",
      fontSize: "1.125rem",
    },
  };
};
