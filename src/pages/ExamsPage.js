import React from "react";
import {
  Button,
  FormControlLabel,
  Grow,
  Link,
  makeStyles,
  Paper,
  Switch,
  useTheme,
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

const useStyles = makeStyles((theme) => ({
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
}));

const columns = [
  {
    field: "semester",
    headerName: "Semester",
    width: 150,
    headerClassName: "",
  },
  { field: "name", headerName: "Subject Name", width: 170 },
  { field: "ects", headerName: "ECTS", width: 130 },
  { field: "date", headerName: "Date", width: 130 },
  { field: "time", headerName: "Time", width: 130 },
  { field: "professor", headerName: "Professor", width: 170 },
  { field: "colloquium", headerName: "Colloquium", width: 130 },
];

const DUMMY_SUBJECTS = exams;

const ExamsPage = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [term, setTerm] = useState(0);
  const [checked, setChecked] = useState(true);

  const toggleNotifications = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Grid container direction="column">
      <Grid
        container
        direction="row"
        style={{ justifyContent: "space-evenly" }}
      >
        {/*register*/}
        <Grid
          item
          style={{
            backgroundColor: theme.palette.common.white,
            padding: "2em",
            textAlign: "center",
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
            <Grid item style={{ display: "flex", width: 1100 }}>
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
          <Grid container direction="column">
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
      <Grid container></Grid>
    </Grid>
  );
};

export default ExamsPage;
