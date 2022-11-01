import {
  Button,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginBottom: "18rem",
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
    margin: "10em auto auto auto",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginBottom: "12em",
    },
  },
  paper: {
    width: "100%",
    minWidth: "20em",
    padding: 0,
  },
  heading: {
    margin: "1.5rem 0 2rem 0",
  },
  input: {
    "& label.Mui-focused": {
      color: theme.palette.common.darkPurple,
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: theme.palette.common.darkPurple,
    },
  },
  button: {
    ...theme.typography.loginButton,
    height: "2.5em",
    fontSize: "18px",
  },
  signup: {
    textTransform: "none",
    padding: 0,
    lineHeight: 0,
    fontWeight: 700,
    fontSize: "16px",
    "&:hover": {
      color: theme.palette.common.darkPurple,
    },
  },
}));

const LoginPage = (props) => {
  const classes = useStyles();

  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [usernameHelperText, setUsernameHelperText] = useState("");
  const [password, setPassword] = useState("");
  const [passwordHelperText, setPasswordHelperText] = useState("");

  const signUpHandler = () => {
    setIsLogin((prevState) => !prevState);
    setUsername("");
    setPassword("");
    setUsernameHelperText("");
    setPasswordHelperText("");
  };

  const onChangeHandler = (event) => {
    let valid;

    switch (event.target.id) {
      case "username":
        setUsername(event.target.value);
        valid = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/.test(
          event.target.value
        );

        if (!valid) {
          setUsernameHelperText("Invalid username");
        } else {
          setUsernameHelperText("");
        }
        break;

      case "password":
        setPassword(event.target.value);
        valid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(
          event.target.value
        );

        if (!valid && !isLogin) {
          setPasswordHelperText("Invalid password");
        } else {
          setPasswordHelperText("");
        }
        break;
      default:
        break;
    }
  };

  return (
    <Grid className={classes.mainContainer}>
      <Paper elevation={7} className={classes.paper}>
        <Grid alignItems="center" container direction="column">
          <Grid item className={classes.heading}>
            <Typography variant="h4">
              {isLogin ? "Log In" : "Sign Up"}
            </Typography>
          </Grid>
          <Grid item>
            <Grid item container direction="column" style={{ width: "20em" }}>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Username"
                  id="username"
                  fullWidth
                  variant="filled"
                  classes={{ root: classes.input }}
                  error={usernameHelperText.length !== 0}
                  helperText={usernameHelperText}
                  value={username}
                  onChange={onChangeHandler}
                />
              </Grid>
              <Grid item style={{ marginBottom: "1.5em" }}>
                <TextField
                  label="Password"
                  id="password"
                  type="password"
                  fullWidth
                  variant="filled"
                  classes={{ root: classes.input }}
                  error={passwordHelperText.length !== 0}
                  helperText={passwordHelperText}
                  value={password}
                  onChange={onChangeHandler}
                />
              </Grid>
              <Grid item style={{ marginBottom: "1.5em" }}>
                <Button className={classes.button} fullWidth>
                  {isLogin ? "Log In" : "Sign Up"}
                </Button>
              </Grid>
              <Grid item>
                <Grid
                  container
                  direction="row"
                  style={{ marginBottom: "1.5rem" }}
                >
                  <Grid item style={{ marginRight: "auto", fontSize: "16px" }}>
                    {isLogin
                      ? "Don't have an account?"
                      : "Already have an account?"}
                  </Grid>
                  <Grid item>
                    <Button
                      onClick={signUpHandler}
                      className={classes.signup}
                      disableRipple
                    >
                      {isLogin ? "Sign up" : "Log in"}
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default LoginPage;
