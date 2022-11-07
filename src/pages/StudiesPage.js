import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import Lottie from "react-lottie";

import studiesAnimationData from "../animations/studiesanimaiton/solution.json";
import arrowAnimationData from "../animations/arrowanimation/arrow.json";

import background from "../assets/logos/background_logo_small.png";
import exam from "../assets/exams.png";
import subject from "../assets/subject.jpg";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  headingTextContainer: {
    textAlign: "center",
    backgroundColor: "white",
    padding: "2em",
    borderRadius: "1em",
    boxShadow: theme.shadows[10],
  },
  headingContainer: {
    backgroundImage: `url(${background})`,
    backgroundRepeat: "repeat",
    backgroundPosition: "center",
    paddingBottom: "10em",
  },
  specialText: {
    fontFamily: "Pacifico",
    fontSize: "1.3rem",
    color: theme.palette.common.darkPurple,
  },
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    },
  },
  gotoButton: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.common.darkPurple,
    fontFamily: "Roboto",
  },
}));

const StudiesPage = (props) => {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const { setActiveTab, setOption } = props;

  const studiesOptions = {
    loop: true,
    autoplay: true,
    animationData: studiesAnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const arrowOptions = {
    loop: true,
    autoplay: true,
    animationData: arrowAnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column" style={{ marginTop: "-0.75em" }}>
      <Grid item>
        <Grid
          container
          justify="space-around"
          alignItems="center"
          className={classes.headingContainer}
        >
          <Grid item className={classes.animation}>
            <Lottie
              options={studiesOptions}
              height={"100%"}
              width={"100%"}
            ></Lottie>
          </Grid>
          <Grid item className={classes.headingTextContainer}>
            <Typography variant="h2">Studying can be difficult ...</Typography>
            <Typography variant="h6">
              But, don't worry, we will{" "}
              <span className={classes.specialText}>help</span> you!
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          container
          justify="flex-start"
          direction={matchesMD ? "column" : "row"}
          alignItems="center"
          style={{ marginTop: matchesMD ? "3em" : "8em", marginBottom: "8em" }}
        >
          <Grid
            item
            className={classes.animation}
            style={
              matchesSM
                ? {
                    "-webkit-transform": "rotate(90deg)",
                    "-moz-transform": "rotate(90deg)",
                    "-o-transform": "rotate(90deg)",
                    "-ms-transform": "rotate(90deg)",
                    transform: "rotate(90deg)",
                  }
                : {}
            }
          >
            <Lottie
              options={arrowOptions}
              height={"100%"}
              width={"100%"}
            ></Lottie>
          </Grid>
          <Grid item style={{ marginTop: matchesMD ? "6em" : "undefined" }}>
            <Card
              sx={{ maxWidth: 300 }}
              style={{ minWidth: matchesXS ? "auto" : 500 }}
            >
              <CardMedia
                component="img"
                height="300"
                image={exam}
                alt="people taking exam"
              />
              <CardContent>
                <Typography gutterBottom variant="h3" component="div">
                  Exams
                </Typography>
                <Typography variant="subtitle1">
                  If you need help organizing your exams or studying, <br />{" "}
                  check out our MATFPlaner service!
                </Typography>
                <Typography variant="subtitle1">
                  You can find it in the Exams section.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="medium"
                  className={classes.gotoButton}
                  component={Link}
                  to="/exams"
                  onClick={() => {
                    setActiveTab(2);
                    setOption(1);
                  }}
                >
                  Go to Exams
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          container
          direction={matchesMD ? "column-reverse" : "row"}
          justify="flex-end"
          alignItems="center"
          style={{
            marginTop: matchesMD ? "1em" : "8em",
            marginBottom: "8em",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Grid item style={{ marginTop: matchesMD ? "6em" : "undefined" }}>
            <Card
              sx={{ maxWidth: 300 }}
              style={{ minWidth: matchesXS ? "auto" : 500 }}
            >
              <CardMedia
                component="img"
                height="300"
                image={subject}
                alt="math lecture"
              />
              <CardContent>
                <Typography gutterBottom variant="h3" component="div">
                  Subjects
                </Typography>
                <Typography variant="subtitle1">
                  Are you interested in maths or programming <br />
                  ...or both? <br />
                  We've got plenty of interesting subjects here!
                </Typography>
                <Typography variant="subtitle1">
                  You can find it in the Subject section.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="medium"
                  className={classes.gotoButton}
                  component={Link}
                  to="/subjects"
                  onClick={() => {
                    setActiveTab(2);
                    setOption(2);
                  }}
                >
                  Go to Subjects
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid
            item
            className={classes.animation}
            style={
              matchesSM
                ? {
                    "-webkit-transform": "rotate(90deg)",
                    "-moz-transform": "rotate(90deg)",
                    "-o-transform": "rotate(90deg)",
                    "-ms-transform": "rotate(90deg)",
                    transform: "rotate(90deg)",
                  }
                : {
                    "-webkit-transform": "scaleX(-1)",
                    transform: "scaleX(-1)",
                  }
            }
          >
            <Lottie
              options={arrowOptions}
              height={"100%"}
              width={"100%"}
            ></Lottie>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default StudiesPage;
