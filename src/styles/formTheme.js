export const formTheme = (theme) => {
  return {
    input: {
      backgroundColor: "transparent",
      color: theme.palette.primary.light,
      letterSpacing: 1.2,
      border: "none",
      borderBottom: "1px solid #ddd",
      fontWeight: "bold",
      fontSize: "20px",
      padding: "1rem 0",
      color: "#fff",
      "& + ::placeholder": {
        color: "#fff",
      },
    },
  };
};
