import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Logo from "./imgs/new_logo_ai.png";
import firebase from "firebase";
import styles from "./styles/SignInFormStyles";
import { Snackbar, SnackbarContent } from "@material-ui/core";

function SignInForm(props) {
  const { classes } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackMsg, setSnackMsg] = useState("");
  const [isError, setIsError] = useState(false);

  function showSnackbar(message, error = false) {
    setIsError(error);
    setSnackMsg(message);
    setOpenSnackbar(true);
  }

  function handleSubmit(event) {
    showSnackbar("Signing In...");
    event.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => props.history.push("/"))
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        showSnackbar(errorMessage, true);
      });
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };

  return (
    <div className={classes.mainWrapper}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar
            className={classes.avatar}
            src={Logo}
            alt="Color Palettes Logo"
          />
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form
            className={classes.form}
            onSubmit={(event) => handleSubmit(event)}>
            <TextField
              variant="filled"
              margin="normal"
              required
              fullWidth
              id="email"
              type="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              variant="filled"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}>
              Sign In
            </Button>
            <Grid container justify="center">
              <Grid item>
                <Link className={classes.signupLink} to="/signup">
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
      <Snackbar
        // anchorOrigin={{
        //   vertical: 'bottom',
        //   horizontal: 'left',
        // }}
        // className={classes.snackbar}
        open={openSnackbar}
        autoHideDuration={5000}
        onClose={handleClose}>
        <SnackbarContent
          classes={isError && { root: classes.snackbar }}
          message={snackMsg}
          action={
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          }
        />
      </Snackbar>
    </div>
  );
}

export default withStyles(styles)(SignInForm);
