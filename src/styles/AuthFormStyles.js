import sizes from "../size";

export default {
  root: {
    fontFamily: "'Cairo', sans-serif",
    position: "absolute",
    top: "0",
    bottom: "0",
    right: "0",
    left: "0",
    backgroundColor: "#330055",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  },
  modalWrapper: {
    position: "relative",
    width: "80vw",
    height: "90vh",
    display: "flex",
    flexFlow: "column wrap",
    backgroundColor: "#ffffff",
    color: "#2b2d42",
    overflow: "hidden",
    [sizes.up("xs")]: {
      width: "70%",
    },
    [sizes.up("sm")]: {
      width: "80%",
      height: "70vh",
      flexFlow: "row nowrap"
    },
    [sizes.up("md")]: {
      width: "70%",
    },
    [sizes.up("lg")]: {
      width: "60%",
    },
  },
  loginWrapper: {
    width: "100%"
  },
  signupWrapper: {
    width: "100%"
  },
  formWrapper: {
    height: "100%",
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    zIndex: "1"
  },
  formHeading: {
    margin: "3vh auto 1vh auto"
  },
  form: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexFlow: "column wrap",
  },
  formSpan: {
    fontSize: "12px",
    color: "#b8bacf"
  },
  formInputField: {
    position: "relative",
    minWidth: "200px",
    width: "70%",
    maxWidth: "300px",
    "& i": {
      position: "absolute",
      fontSize: "16px",
      color: "#3c8ce7",
      top: "16px",
      left: "10px"
    }
  },
  formInput: {
    margin: "1vh auto",
    fontSize: "12px",
    padding: "10px 10px 10px 40px",
    backgroundColor: "#e8ebe4",
    outline: "none",
    border: "none",
    borderBottom: "2px solid #b8bacf",
    width: "100%",
    boxSizing: "border-box",
      "&:focus": {
      backgroundColor: "#d2d5dd"
    },
    "&[type='password']": {
      marginBottom: "2vh"
    },
  },
  "#forgot_password": {
    fontSize: "12px",
    textDecoration: "none",
    color: "#b8bacf",
    position: "relative",
    "&:after": {
      display: "block",
      position: "absolute",
      left: "10%",
      right: "10%",
      bottom: "1px",
      borderBottom: "1px solid #3c8ce7",
      content: "''"
    }
  },
  formBtn: {
    margin: "2vh auto",
    backgroundImage: "linear-gradient(135deg, #3c8ce7 10%, #00eaff 100%)",
    color: "white",
    border: "1px solid white",
    outline: "none",
    borderRadius: "20px",
    padding: "10px 40px",
    transition: "all ease-in-out 0.2s",
    cursor: "pointer",
    "&:hover": {
      border: "1px solid #3c8ce7",
      color: "#3c8ce7",
      background: "transparent"
    }
  },
  collapsedSection: {
    width: "100%",
    height: "100%",
    backgroundImage: "linear-gradient(135deg, #3c8ce7 10%, #00eaff 100%)",
    position: "relative",
    zIndex: "2"
  },
  hideSection: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexFlow: "column wrap",
    color: "white"
  },
  collapsedHeading: {
    margin: "0"
  },
  collapsedText: {
    fontSize: "12px",
    margin: "0",
    marginBottom: "1vh",
    marginTop: "-10px",
    letterSpacing: "1px",
    [sizes.up("md")]: {
      fontSize: "16px",
      margin: "1rem"
    },
  },
  collapsedBtn: {
    background: "transparent",
    color: "white",
    border: "1px solid white",
    fontWeight: "bold",
    outline: "none",
    borderRadius: "20px",
    padding: "10px 40px",
    transition: "all ease-in-out 0.5s",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "white",
      color: "#3c8ce7",
      border: "1px solid white"
    }
  },
  hidden: {
    display: "none"
  },
};