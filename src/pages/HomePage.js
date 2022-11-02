import {
  Button,
  Grid,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import Lottie from "react-lottie";

import profileAnimationData from "../animations/profileanimation/data.json";
import walletAnimationData from "../animations/financeanimation/data.json";

import { Link } from "react-router-dom";
import { ArrowRightAlt } from "@material-ui/icons";

import infoBackground from "../assets/background.jpg";
import customerSupport from "../assets/customersupport.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: "-2em",
    [theme.breakpoints.down("md")]: {
      marginTop: "0em",
    },
  },
  profileTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  financeTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  buttonContainer: {
    marginTop: "1em",
  },
  animation: {
    maxWidth: "70em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    },
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    height: 45,
    width: 145,
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  specialText: {
    fontFamily: "Pacifico",
    fontSize: "1.3rem",
    color: theme.palette.common.darkPurple,
  },
  studiesHeading: {
    justifyContent: "space-around",
    alignItems: "center",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  studiesContainer: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  financeContainer: {
    backgroundColor: theme.palette.common.white,
  },
  supportMainContainer: {
    backgroundImage: `url(${customerSupport})`,
    backgroundPosition: "right",
    backgroundSize: "auto",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("sm")]: {
      background: "transparent",
    },
  },
  supportTextContainer: {
    textAlign: "center",
    marginTop: "16em",
    marginBottom: "16em",
    marginLeft: "10em",
    minWidth: "21.5em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0em",
    },
  },
}));

const HomePage = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const { setActiveTab, setOption } = props;
  const matchesXL = useMediaQuery(theme.breakpoints.up("xl"));
  //const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const profileOptions = {
    loop: true,
    autoplay: true,
    animationData: profileAnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const walletOptions = {
    loop: true,
    autoplay: true,
    animationData: walletAnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      {/*profile*/}
      <Grid item>
        <Grid
          container
          justify="flex-end"
          alignItems="center"
          direction="row"
          style={{ height: matchesXL ? "70em" : "60em" }}
        >
          <Grid sm item className={classes.profileTextContainer}>
            <Typography
              variant="h2"
              align="center"
              style={{ marginBottom: "1em" }}
            >
              <span
                className={classes.specialText}
                style={{ fontSize: "2.65rem" }}
              >
                Welcome
              </span>
              {"   "}
              to StudNet student portal!
            </Typography>
            <Typography variant="h4" align="center">
              Check out your Profile page
            </Typography>
            <Typography variant="subtitle1" align="center">
              There you can find and update your{" "}
              <span className={classes.specialText}>personal info!</span>
            </Typography>
            <Grid
              container
              className={classes.buttonContainer}
              justify="space-around"
              alignItems="center"
            >
              <Grid item>
                <Button
                  component={Link}
                  to="/profile"
                  variant="contained"
                  onClick={() => setActiveTab(1)}
                  className={classes.learnButtonHero}
                >
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ArrowRightAlt width={15} height={15} />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item className={classes.animation}>
            <Lottie options={profileOptions} height={"100%"} width={"100%"} />
          </Grid>
        </Grid>
      </Grid>
      {/*studies*/}
      <Grid item>
        <Grid
          container
          style={{ height: "75em" }}
          alignItems="center"
          direction="row"
          className={classes.studiesContainer}
        >
          <Grid item className={classes.studiesHeading}>
            <Typography variant="h3">Make studying easier</Typography>
          </Grid>
          <Grid
            item
            container
            style={{
              textAlign: matchesXS ? "center" : "inherit",
            }}
            direction={matchesXS ? "column" : "row"}
          >
            <Grid
              item
              sm
              style={{ marginLeft: matchesXS ? 0 : matchesSM ? "2em" : "5em" }}
            >
              <Grid
                container
                style={{ marginBottom: matchesXS ? "10em" : 0 }}
                direction="column"
              >
                <Typography variant="h2">Take a look at your exams</Typography>
                <Typography variant="subtitle1">
                  Those who went well and those who didn't...
                </Typography>
                <Grid item>
                  <Button
                    component={Link}
                    to="/exams"
                    variant="outlined"
                    style={{ color: "white", borderColor: "white" }}
                    className={classes.learnButton}
                    onClick={() => {
                      setActiveTab(2);
                      setOption(1);
                    }}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ArrowRightAlt width={10} height={10} fill="white" />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              sm
              style={{
                marginRight: matchesXS ? 0 : matchesSM ? "2em" : "5em",
                textAlign: matchesXS ? "center" : "right",
              }}
            >
              <Grid container direction="column">
                <Typography variant="h2">
                  Choose your favorite subjects
                </Typography>
                <Typography variant="subtitle1">
                  And enroll them next year!
                </Typography>
                <Grid item>
                  <Button
                    component={Link}
                    to="/subjects"
                    variant="outlined"
                    style={{ color: "white", borderColor: "white" }}
                    className={classes.learnButton}
                    onClick={() => {
                      setActiveTab(2);
                      setOption(2);
                    }}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ArrowRightAlt
                      width={10}
                      height={10}
                      fill={theme.palette.common.black}
                    />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/*finances*/}
      <Grid
        container
        direction={matchesSM ? "column" : "row"}
        justify="center"
        alignItems="center"
        className={classes.financeContainer}
        style={{ paddingTop: matchesSM ? "2em" : undefined }}
      >
        <Grid item>
          <Grid
            container
            direction="column"
            className={classes.financeTextContainer}
          >
            <Typography variant="h2" align="center">
              Manage your finances
            </Typography>
            <Typography variant="subtitle1" align="center">
              Track your <span className={classes.specialText}>payments</span>{" "}
              easily.
            </Typography>
            <Grid
              container
              justify="center"
              className={classes.buttonContainer}
            >
              <Button
                component={Link}
                to="/finances"
                variant="outlined"
                style={{
                  color: theme.palette.common.green,
                  borderColor: theme.palette.common.green,
                }}
                className={classes.learnButton}
                onClick={() => {
                  setActiveTab(3);
                }}
              >
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ArrowRightAlt width={10} height={10} fill="white" />
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          sm
          item
          className={classes.animation}
          style={{
            maxWidth: "40em",
            maxHeight: "40em",
          }}
        >
          <Lottie options={walletOptions} height={"100%"} width={"100%"} />
        </Grid>
      </Grid>

      {/*support*/}
      <Grid item>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          className={classes.supportMainContainer}
        >
          <Grid item>
            <Grid
              container
              direction="column"
              className={classes.supportTextContainer}
            >
              <Typography variant="h2" align="center">
                And if you have any doubts...
              </Typography>
              <Typography variant="h4" align="center">
                ...feel free to ask for{" "}
                <span
                  className={classes.specialText}
                  style={{ fontSize: "1.75rem" }}
                >
                  support
                </span>
              </Typography>
              <Grid item>
                <Grid
                  container
                  justify="center"
                  className={classes.buttonContainer}
                >
                  <Button
                    component={Link}
                    to="/support"
                    variant="contained"
                    onClick={() => setActiveTab(1)}
                    className={classes.learnButtonHero}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ArrowRightAlt width={15} height={15} />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HomePage;
