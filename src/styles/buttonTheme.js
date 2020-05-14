export const buttonTheme = (theme) => {
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
  };
};
