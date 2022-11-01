import { Grid, Hidden, makeStyles, useTheme } from "@material-ui/core";

import logo from "../assets/logos/logo_large_grey.png";
import facebook from "../assets/social/facebook.svg";
import instagram from "../assets/social/instagram.svg";
import twitter from "../assets/social/twitter.svg";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.white,
    width: "100%",
    zIndex: 1302,
    position: "relative",
  },
  mainContainer: {
    position: "absolute",
  },
  gridItem: {
    margin: "3em",
    marginBottom: 0,
  },
  logo: {
    width: "12em",
    height: "12em",
    marginLeft: "5em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("xs")]: {
      width: "10em",
      height: "10em",
      marginLeft: "2.5em",
    },
  },
  socialContainer: {
    position: "absolute",
    marginTop: "-6em",
    right: "1.5em",
    width: "auto",
    [theme.breakpoints.down("xs")]: {
      right: "0.6em",
      marginTop: "-5em",
    },
  },
  socialIcon: {
    height: "4em",
    width: "4em",
    [theme.breakpoints.down("xs")]: {
      height: "3em",
      width: "3em",
    },
  },
  link: {
    color: theme.palette.common.black,
    textDecoration: "none",
  },
}));

const Footer = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  console.log(theme);

  const { setActiveTab } = props;

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid
          container
          direction="row"
          justify="center"
          className={classes.mainContainer}
        >
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item>Design & Development</Grid>
              <Grid
                item
                component={"a"}
                href="https://github.com/stenjo1"
                rel="noopener noreferrer"
                target="_blank"
                className={classes.link}
              >
                Stefanija Car
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                to="/"
                className={classes.link}
                onClick={() => setActiveTab(0)}
              >
                Home
              </Grid>
              <Grid
                item
                component={Link}
                to="/profile"
                className={classes.link}
                onClick={() => setActiveTab(1)}
              >
                Profile
              </Grid>
              <Grid
                item
                component={Link}
                to="/support"
                className={classes.link}
                onClick={() => setActiveTab(4)}
              >
                Support
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img src={logo} alt="logo" className={classes.logo} />

      <Grid
        container
        direction="row"
        justify="flex-end"
        spacing={2}
        className={classes.socialContainer}
      >
        <Grid
          item
          component={"a"}
          href="https://www.facebook.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src={facebook}
            alt="facebook logo"
            className={classes.socialIcon}
          />
        </Grid>
        <Grid
          item
          component={"a"}
          href="https://www.twitter.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src={twitter}
            alt="twitter logo"
            className={classes.socialIcon}
          />
        </Grid>
        <Grid
          item
          component={"a"}
          href="https://www.instagram.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src={instagram}
            alt="instagram logo"
            className={classes.socialIcon}
          />
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
