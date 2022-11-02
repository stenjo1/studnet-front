import { createMuiTheme } from "@material-ui/core";

const white = "#ffffff";
const black = "#17141f";
const grey = "#7c7c7c";
const green = "#77DD77";
const lightGreen = "#a6e9a6";
const purple = "#9A7FAE";
const darkPurple = "#996699";

export default createMuiTheme({
  palette: {
    common: {
      white: white,
      black: black,
      grey: grey,
      green: green,
      darkPurple: darkPurple,
    },
    primary: {
      main: white,
    },
    secondary: {
      main: green,
      light: lightGreen,
    },
    background: {
      default: green,
    },
  },
  typography: {
    tab: {
      fontFamily: "Roboto",
      fontWeight: 700,
      color: black,
      fontSize: "1rem",
    },
    logout: {
      fontSize: "1rem",
      fontFamily: "Roboto",
      fontWeight: 700,
      color: black,
      lineHeight: 1.5,
    },
    h2: {
      fontFamily: "Roboto",
      fontWeight: 700,
      fontSize: "2.5rem",
      color: black,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: "Pacifico",
      fontSize: "2.5rem",
      color: black,
    },
    h4: {
      fontFamily: "Roboto",
      fontSize: "1.75rem",
      color: black,
      fontWeight: 700,
    },
    h6: {
      fontWeight: 500,
      fontFamily: "Roboto",
      color: black,
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: black,
    },
    label: {
      fontSize: "1.25rem",
      fontFamily: "Roboto",
      fontWeight: 400,
    },
    loginButton: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      color: "white",
      backgroundColor: purple,
      "&:hover": {
        backgroundColor: darkPurple,
      },
    },
    learnButton: {
      borderColor: purple,
      borderWidth: 2,
      textTransform: "none",
      color: darkPurple,
      borderRadius: 50,
      fontFamily: "Roboto",
      fontWeight: "bold",
    },
  },
});
