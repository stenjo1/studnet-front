import {
  Avatar,
  Button,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  makeStyles,
  Paper,
  Radio,
  RadioGroup,
  Switch,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";

import EditIcon from "@material-ui/icons/Edit";
import SettingsIcon from "@material-ui/icons/Settings";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import profileImage from "../assets/slika.jpg";
import backgroundImage from "../assets/background.jpg";

const useStyles = makeStyles((theme) => ({
  mainPaper: {
    marginTop: "-0.55em",
    padding: "2em",
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
  },
  avatar: {
    width: "15em",
    height: "15em",
    [theme.breakpoints.down("xs")]: {
      width: "10em",
      height: "10em",
    },
  },
  labelContainer: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "25em",
    marginBottom: "4em",
    [theme.breakpoints.down("md")]: {
      justifyContent: "space-beetween",
      width: "20em",
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      justifyContent: "flex-end",
      width: "15em",
      marginBottom: "0em",
    },
  },
  label: {
    ...theme.typography.label,
  },
  inputContainer: {
    width: "20em",
    marginBottom: "1em",
    marginLeft: "1.5em",
    [theme.breakpoints.down("xs")]: {
      width: "15em",
      marginLeft: "0.75em",
    },
  },
  inputLabel: {},
  expansionPanelDetails: {
    padding: "0 24px 0 0",
  },
  changeButton: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.common.darkPurple,
    fontFamily: "Roboto",
  },
  settingsGroupContainer: {
    paddingBottom: "1em",
    paddingTop: "1em",
    width: "20em",
    borderBottom: `0.5px solid ${theme.palette.common.grey}`,
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
}));

const ProfilePage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Paper elevation={3} className={classes.mainPaper}>
      <Grid
        container
        direction={matchesMD ? "column" : "row"}
        justify="space-around"
        alignItems="center"
      >
        <Grid item>
          <Paper elevation={5}>
            <Grid
              container
              direction={matchesMD ? "column" : "row"}
              justify={matchesMD ? "flex-start" : "space-around"}
              alignItems="center"
              style={{
                padding: matchesMD ? "0" : "2em",
                marginTop: matchesMD ? "2em" : "2em",
                marginBottom: "2em",
              }}
            >
              <Grid item>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  style={{ marginTop: matchesMD ? "1em" : "undefined" }}
                >
                  <Avatar
                    src={profileImage}
                    alt="extremely pretty girl"
                    className={classes.avatar}
                  />
                  <Grid item>
                    <Grid
                      container
                      direction="column"
                      style={{ marginTop: "2em" }}
                    >
                      <Button
                        variant="contained"
                        component="label"
                        className={classes.changeButton}
                      >
                        Change Picture
                        <input hidden accept="image/*" multiple type="file" />
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="flex-start"
                  style={{
                    marginLeft: matchesMD ? "1em" : "6em",
                    marginTop: matchesMD ? "2em" : "undefined",
                  }}
                >
                  <Grid item>
                    <Grid
                      container
                      className={classes.labelContainer}
                      style={{ paddingLeft: "24px" }}
                    >
                      {!matchesXS && (
                        <Typography className={classes.label}>
                          Profile information
                        </Typography>
                      )}
                      <EditIcon color="secondary" />
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid
                      container
                      justify="flex-start"
                      alignItems="center"
                      className={classes.inputContainer}
                    >
                      <Typography className={classes.inputLabel}>
                        Full Name:{" "}
                      </Typography>
                      <TextField
                        id="profile-full-name"
                        hiddenLabel
                        disabled
                        variant="outlined"
                        defaultValue="Stefanija Markovic"
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid
                      container
                      justify="flex-start"
                      alignItems="center"
                      className={classes.inputContainer}
                    >
                      <Typography className={classes.inputLabel}>
                        Mobile:{" "}
                      </Typography>
                      <TextField
                        id="profile-mobile"
                        hiddenLabel
                        disabled
                        variant="outlined"
                        defaultValue="+381 65 9444 954"
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid
                      container
                      justify="flex-start"
                      alignItems="center"
                      className={classes.inputContainer}
                    >
                      <Typography className={classes.inputLabel}>
                        Email:{" "}
                      </Typography>
                      <TextField
                        id="profile-email"
                        hiddenLabel
                        disabled
                        variant="outlined"
                        defaultValue="stefanija.mar1999@gmail.com"
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid
                      container
                      justify="flex-start"
                      alignItems="center"
                      className={classes.inputContainer}
                    >
                      <Typography className={classes.inputLabel}>
                        Address:{" "}
                      </Typography>
                      <TextField
                        id="profile-address"
                        hiddenLabel
                        disabled
                        variant="outlined"
                        defaultValue="Pozeska"
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                  <Grid item>
                    <ExpansionPanel className={classes.expansionPanel}>
                      <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon color="secondary" />}
                      >
                        <Typography>Additional Data</Typography>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails
                        classes={{ root: classes.expansionPanelDetails }}
                      >
                        <Grid container direction="column">
                          <Grid item>
                            <Grid
                              container
                              justify="flex-start"
                              alignItems="center"
                              className={classes.inputContainer}
                            >
                              <Typography className={classes.inputLabel}>
                                Birthday:
                              </Typography>
                              <TextField
                                id="profile-birthday"
                                hiddenLabel
                                disabled
                                type="date"
                                variant="outlined"
                                defaultValue="1999-10-20"
                                fullWidth
                              />
                            </Grid>
                          </Grid>

                          <Grid item>
                            <Grid
                              container
                              justify="flex-start"
                              alignItems="center"
                              className={classes.inputContainer}
                            >
                              <Typography className={classes.inputLabel}>
                                Enrolled:
                              </Typography>
                              <TextField
                                id="profile-birthday"
                                hiddenLabel
                                disabled
                                type="date"
                                variant="outlined"
                                defaultValue="2018-07-03"
                                fullWidth
                              />
                            </Grid>
                          </Grid>
                          <Grid item>
                            <Grid container>
                              <FormControl style={{ paddingLeft: "24px" }}>
                                <FormLabel id="gender-label">
                                  <Typography
                                    style={{
                                      color: theme.palette.common.black,
                                    }}
                                  >
                                    Gender
                                  </Typography>
                                </FormLabel>
                                <RadioGroup
                                  row
                                  aria-labelledby="gender-label"
                                  name="row-radio-buttons-group"
                                  defaultValue="female"
                                >
                                  <FormControlLabel
                                    value="female"
                                    control={<Radio />}
                                    label="Female"
                                    defaultChecked
                                  />
                                  <FormControlLabel
                                    value="male"
                                    control={<Radio />}
                                    label="Male"
                                  />
                                </RadioGroup>
                              </FormControl>
                            </Grid>
                          </Grid>
                        </Grid>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item>
          <Paper>
            {!matchesXS && (
              <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="flex-start"
                style={{
                  padding: "2em",
                  marginTop: matchesMD ? "2em" : "2em",
                  marginBottom: "2em",
                }}
              >
                <Grid item>
                  <Grid container className={classes.labelContainer}>
                    <Typography className={classes.label}>Settings</Typography>
                    {/*<SettingsIcon />*/}
                  </Grid>
                </Grid>
                <Grid item className={classes.settingsGroupContainer}>
                  <Typography>General</Typography>
                  <FormGroup>
                    <FormControlLabel
                      disabled
                      control={<Switch defaultChecked />}
                      label="Dark theme"
                    />
                    <FormControlLabel
                      disabled
                      control={<Switch defaultChecked />}
                      label="Serbian language"
                    />
                  </FormGroup>
                </Grid>
                <Grid item className={classes.settingsGroupContainer}>
                  <Typography>Privacy</Typography>
                  <FormGroup>
                    <FormControlLabel
                      control={<Switch defaultChecked />}
                      label="Private account"
                    />
                    <FormControlLabel
                      control={<Switch defaultChecked />}
                      label="Accept messages from everyone"
                    />
                  </FormGroup>
                </Grid>
                <Grid item className={classes.settingsGroupContainer}>
                  <Typography>Notifications</Typography>
                  <FormGroup>
                    <FormControlLabel
                      control={<Switch defaultChecked />}
                      label="Notify me when the exam schedule is out."
                    />
                    <FormControlLabel
                      control={<Switch defaultChecked />}
                      label="Notify me when the class schedule is out."
                    />
                    <FormControlLabel
                      control={<Switch />}
                      label="Notify me when someone views my profile"
                    />
                  </FormGroup>
                </Grid>
              </Grid>
            )}
            {matchesXS && (
              <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="flex-start"
              >
                <ExpansionPanel>
                  <ExpansionPanelSummary>
                    <Grid container className={classes.labelContainer}>
                      <SettingsIcon color="secondary" />
                    </Grid>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Grid container direction="column">
                      <Grid item className={classes.settingsGroupContainer}>
                        <Typography>General</Typography>
                        <FormGroup>
                          <FormControlLabel
                            disabled
                            control={<Switch defaultChecked />}
                            label="Dark theme"
                          />
                          <FormControlLabel
                            disabled
                            control={<Switch defaultChecked />}
                            label="Serbian language"
                          />
                        </FormGroup>
                      </Grid>
                      <Grid item className={classes.settingsGroupContainer}>
                        <Typography>Privacy</Typography>
                        <FormGroup>
                          <FormControlLabel
                            control={<Switch defaultChecked />}
                            label="Private account"
                          />
                          <FormControlLabel
                            control={<Switch defaultChecked />}
                            label="Accept messages from everyone"
                          />
                        </FormGroup>
                      </Grid>
                      <Grid item className={classes.settingsGroupContainer}>
                        <Typography>Notifications</Typography>
                        <FormGroup>
                          <FormControlLabel
                            control={<Switch defaultChecked />}
                            label="Notify me when the exam schedule is out."
                          />
                          <FormControlLabel
                            control={<Switch defaultChecked />}
                            label="Notify me when the class schedule is out."
                          />
                          <FormControlLabel
                            control={<Switch />}
                            label="Notify me when someone views my profile"
                          />
                        </FormGroup>
                      </Grid>
                    </Grid>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </Grid>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProfilePage;
