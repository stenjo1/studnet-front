import React from "react";
import {
  Button,
  FormControlLabel,
  Grow,
  Link,
  makeStyles,
  Paper,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useMediaQuery,
  useTheme,
  withStyles,
} from "@material-ui/core";

import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";

import exams from "../dummy-data/exams";
import exams_history from "../dummy-data/exams_history";

import Lottie from "react-lottie";
import rightAnimationData from "../animations/pointinganimation/pointing_right.json";
import downAnimationData from "../animations/pointinganimation/pointing_down.json";
import background from "../assets/background_gradient.png";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.purple,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const useStyles = makeStyles((theme) => ({
  background: {
    background: `linear-gradient(to bottom,${theme.palette.common.green} 0%, ${theme.palette.common.white} 50%, ${theme.palette.common.green} 100%) `,
    marginTop: "-1em",
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
  },
  registerMainContainer: {},
  importantText: {
    ...theme.typography.important,
  },
  termItem: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.common.purple,
    "&:hover": {
      backgroundColor: theme.palette.common.darkPurple,
    },
    "&.Mui-selected": {
      backgroundColor: theme.palette.common.darkPurple,
    },
  },
  switchBase: {
    color: theme.palette.common.white,
    "&.MuiSwitch-colorSecondary.Mui-checked": {
      color: theme.palette.common.white,
    },
    "&.MuiSwitch-colorSecondary.Mui-checked + .MuiSwitch-track": {
      backgroundColor: theme.palette.common.darkPurple,
      opacity: 1,
    },
  },
  registerExams: {
    ...theme.typography.loginButton,
    marginTop: "4em",
    width: "100%",
  },
  notificationsLabel: {
    ...theme.typography.h4,
  },
  link: {
    "&.MuiTypography-root": {
      fontWeight: 400,
      fontSize: "1.25em",
      fontFamily: "Pacifico",
    },
    "&.MuiTypography-colorPrimary": {
      color: theme.palette.common.darkPurple,
    },
  },
  "examsRow--5": {
    backgroundColor: theme.palette.common.red,
  },
}));

const DUMMY_SUBJECTS = exams;
const DUMMY_EXAMS = exams_history;

const ExamsPage = () => {
  const classes = useStyles();
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const [term, setTerm] = useState(0);
  const [checked, setChecked] = useState(true);

  const columns = [
    {
      field: "semester",
      headerName: "Semester",
      width: matchesMD ? 100 : 150,
      headerClassName: "",
    },
    { field: "name", headerName: "Subject Name", width: matchesMD ? 170 : 200 },
    { field: "ects", headerName: "ECTS", width: matchesMD ? 90 : 130 },
    { field: "date", headerName: "Date", width: matchesMD ? 100 : 130 },
    { field: "time", headerName: "Time", width: matchesMD ? 100 : 130 },
    { field: "professor", headerName: "Professor", width: 170 },
    {
      field: "colloquium",
      headerName: "Colloquium",
      width: matchesMD ? 90 : 130,
    },
  ];

  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const rightOptions = { ...defaultOptions, animationData: rightAnimationData };
  const downOptions = { ...defaultOptions, animationData: downAnimationData };

  const toggleNotifications = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Grid container direction="column" className={classes.background}>
      <Grid
        container
        direction={matchesMD ? "column-reverse" : "row"}
        justify={matchesMD ? "center" : "space-around"}
        alignItems={matchesMD ? "center" : "flex-start"}
        style={{
          paddingTop: matchesMD ? "2em" : "4em",
          paddingBottom: matchesMD ? "4em" : "4em",
        }}
        className={classes.registerMainContainer}
      >
        {/*register*/}
        <Grid
          item
          style={{
            backgroundColor: theme.palette.common.white,
            padding: "2em",
            textAlign: "center",
            marginTop: matchesMD ? "4em" : "undefined",
          }}
        >
          <Grid container direction="column">
            <Grid item>
              <Grid container direction="column">
                <Grid item>
                  <Typography variant="h4">Exam Registration</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">
                    Hi, choose the desired exam from the corresponding semester
                    and the term in which you want to take it!
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography>
                    Be careful, you{" "}
                    <span className={classes.importantText}>CANNOT</span> choose
                    exams for which you have not passed the pre-exam
                    requirements.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container>
                <Grid item style={{ marginBottom: "2em", marginTop: "2em" }}>
                  <FormControl
                    variant="filled"
                    style={{ minWidth: 120, textAlign: "left" }}
                  >
                    <InputLabel id="select-term-label">Term</InputLabel>
                    <Select
                      labelId="select-term-label"
                      id="select-term"
                      value={term}
                      onChange={(event) => {
                        setTerm(event.target.value);
                      }}
                      style={{
                        backgroundColor: theme.palette.common.purple,
                        color: theme.palette.common.white,
                      }}
                    >
                      <MenuItem value={0} classes={{ root: classes.termItem }}>
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={1} classes={{ root: classes.termItem }}>
                        January
                      </MenuItem>
                      <MenuItem value={2} classes={{ root: classes.termItem }}>
                        February
                      </MenuItem>
                      <MenuItem value={3} classes={{ root: classes.termItem }}>
                        June
                      </MenuItem>
                      <MenuItem value={4} classes={{ root: classes.termItem }}>
                        July
                      </MenuItem>
                      <MenuItem value={5} classes={{ root: classes.termItem }}>
                        September
                      </MenuItem>
                      <MenuItem value={6} classes={{ root: classes.termItem }}>
                        October
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              style={{ display: "flex", width: matchesMD ? "500" : "1200" }}
            >
              <DataGrid
                rows={DUMMY_SUBJECTS}
                columns={columns}
                pageSize={5}
                checkboxSelection
                disableSelectionOnClick
                autoHeight
              ></DataGrid>
            </Grid>
            <Grid item>
              <Button className={classes.registerExams}>Register</Button>
            </Grid>
          </Grid>
        </Grid>
        {/*  notificaitons*/}
        <Grid item>
          <Grid
            container
            direction="column"
            style={{ marginTop: matchesMD ? "4em" : "undefined" }}
          >
            {!matchesMD && (
              <FormControlLabel
                control={
                  <Switch
                    checked={checked}
                    onChange={toggleNotifications}
                    classes={{ switchBase: classes.switchBase }}
                  ></Switch>
                }
                label="Notifications"
                classes={{ label: classes.notificationsLabel }}
              />
            )}
            {matchesMD && (
              <Typography variant="h4" style={{ textAlign: "center" }}>
                Notifications
              </Typography>
            )}
            <Grid item>
              <Grow
                in={checked}
                style={{ transformOrigin: "0 0 0" }}
                {...(checked ? { timeout: 1000 } : {})}
              >
                <Grid container direction="column" style={{ maxWidth: 400 }}>
                  <Paper
                    elevation={6}
                    style={{
                      backgroundColor: "transparent",
                      borderRadius: "10px",
                      marginTop: "1em",
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      style={{
                        backgroundColor: theme.palette.common.white,
                        padding: "1em",
                        borderRadius: "10px",
                      }}
                    >
                      Exam{" "}
                      <Link
                        href="http://www.matf.bg.ac.rs/p/milos-zimonjic/vest/11143/%D0%901---%D1%80%D0%B5%D0%B7%D1%83%D0%BB%D1%82%D0%B0%D1%82%D0%B8-%D1%81%D0%B5%D0%BF%D1%82-1/"
                        rel="noopener noreferrer"
                        target="_blank"
                        classes={{ root: classes.link }}
                      >
                        results{" "}
                      </Link>
                      for Analysis 1 are up!
                    </Typography>
                  </Paper>
                  <Paper
                    elevation={6}
                    style={{
                      backgroundColor: "transparent",
                      borderRadius: "10px",
                      marginTop: "1em",
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      style={{
                        backgroundColor: theme.palette.common.white,
                        padding: "1em",
                        borderRadius: "10px",
                      }}
                    >
                      Exam{" "}
                      <Link
                        href="http://www.matf.bg.ac.rs/p/milos-zimonjic/vest/11143/%D0%901---%D1%80%D0%B5%D0%B7%D1%83%D0%BB%D1%82%D0%B0%D1%82%D0%B8-%D1%81%D0%B5%D0%BF%D1%82-1/"
                        rel="noopener noreferrer"
                        target="_blank"
                        classes={{ root: classes.link }}
                      >
                        results{" "}
                      </Link>
                      for Introduction to Programming are up!
                    </Typography>
                  </Paper>
                  <Paper
                    elevation={6}
                    style={{
                      backgroundColor: "transparent",
                      borderRadius: "10px",
                      marginTop: "1em",
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      style={{
                        backgroundColor: theme.palette.common.white,
                        padding: "1em",
                        borderRadius: "10px",
                      }}
                    >
                      Discrete Mathematics{" "}
                      <Link
                        href="http://www.matf.bg.ac.rs/p/milos-zimonjic/vest/11143/%D0%901---%D1%80%D0%B5%D0%B7%D1%83%D0%BB%D1%82%D0%B0%D1%82%D0%B8-%D1%81%D0%B5%D0%BF%D1%82-1/"
                        rel="noopener noreferrer"
                        target="_blank"
                        classes={{ root: classes.link }}
                      >
                        exam date{" "}
                      </Link>
                      has changed!
                    </Typography>
                  </Paper>
                </Grid>
              </Grow>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
        style={{ marginTop: "10em", marginBottom: "8em" }}
      >
        <Grid item>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            style={{ width: matchesMD ? "auto" : "40em", textAlign: "center" }}
          >
            <Grid item>
              <Grid container direction="column">
                <Typography variant="h4">
                  Here you can see your exam history.
                </Typography>
                <Typography variant="subtitle1">
                  Exams you did not pass are red colored.
                </Typography>
              </Grid>
            </Grid>
            <Grid item style={{ width: "50%" }}>
              <Lottie
                options={matchesMD ? downOptions : rightOptions}
                height={"100%"}
                width={"100%"}
              ></Lottie>
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ marginTop: matchesMD ? "8em" : "undefined" }}>
          <Grow in>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Subject</StyledTableCell>
                    <StyledTableCell align="right">Score</StyledTableCell>
                    <StyledTableCell align="right">Grade</StyledTableCell>
                    <StyledTableCell align="right">Term</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {DUMMY_EXAMS.map((row) => (
                    <TableRow
                      key={row.name}
                      classes={{ root: classes[`examsRow--${row.grade}`] }}
                    >
                      <StyledTableCell component="th" scope="row">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.score}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.grade}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.term}
                      </StyledTableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grow>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ExamsPage;
