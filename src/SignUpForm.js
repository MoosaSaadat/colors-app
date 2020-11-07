import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Logo from './imgs/new_logo_ai.png';
import styles from './styles/SignInFormStyles';
import firebase from 'firebase';
import { IconButton, Snackbar, SnackbarContent } from '@material-ui/core';


function SignUpForm(props) {
  const { classes } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPass, setConfPass] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackMsg, setSnackMsg] = useState("");
  const [isError, setIsError] = useState(false);

  function showSnackbar(message, error=false) {
    setIsError(error);
    setSnackMsg(message);
    setOpenSnackbar(true);
  };

  function handleSubmit(event) {
    showSnackbar("Signing Up...");
    event.preventDefault();
    console.log(email, password, confPass);
    if (password != confPass) {
      showSnackbar("Passwords do not match!", true);
    }
    else {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => props.history.push('/'))
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage)
        showSnackbar(errorMessage, true);
      });
    }
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
  };


  return (
    <div className={classes.mainWrapper}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar} src={Logo} alt="Color Palettes Logo" />
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="confirm-password"
                  label="Confirm Password"
                  type="password"
                  id="confirm-password"
                  autoComplete="current-password"
                  value={confPass}
                  onChange={(e) => setConfPass(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justify="center">
              <Grid item>
                <Link className={classes.signinLink} to="/signin">
                  Already have an account? Sign in
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
        onClose={handleClose}
      >
        <SnackbarContent
        classes={isError && {root: classes.snackbar}}
        message={snackMsg}
        action={
          <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
            <CloseIcon fontSize="small" />
          </IconButton>
        } />
      </Snackbar>
    </div>
  );
}

export default withStyles(styles)(SignUpForm);