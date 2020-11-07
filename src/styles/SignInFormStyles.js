export default (theme) => ({
  mainWrapper: {
    width: "100%",
    height: "100%",
    backgroundColor: "#FFFFFF",
    // backgroundImage: "linear-gradient(135deg, #FFFFFF 0%, #FAFAFA 100%)",
    paddingTop: theme.spacing(2),
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    // margin: theme.spacing(1),
    width: "250px",
    height: "250px",
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  signupLink: {
    color: "#3f51b5",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline"
    }
  },
  snackbar: {
    background: "#f44336",
  },
})