import sizes from "../size";
import { fadeTransitionTime } from "../constants";
import bg from "../imgs/bg_pattern.svg";

export default {
  container: {
    width: "60%",
    margin: "10px auto 50px auto",
    [sizes.down("lg")]: {
      width: "60%",
    },
    [sizes.down("sm")]: {
      width: "40%",
    },
    [sizes.down("xs")]: {
      width: "50%",
    },
  },
  nav: {
    width: "70%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontWeight: "normal",
    color: "black",
    [sizes.down("sm")]: {
      textAlign: "center",
    },
  },
  newBtn: {
    margin: "0px 10px 0px auto",
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 32%)",
    gridGap: "2%",
    [sizes.down("md")]: {
      gridTemplateColumns: "repeat(2, 47.5%)",
      gridGap: "5%",
    },
    [sizes.down("sm")]: {
      gridTemplateColumns: "repeat(1, 100%)",
      gridGap: "1%",
    },
  },
  emptyList: {
    width: "100%",
    padding: "2rem",
    display: "flex",
    flexFlow: "column wrap",
    boxSizing: "border-box",
    backgroundColor: "rgba(0, 0, 0, 0.09)",
    boxShadow: "1px 1px 3px #283441",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  icon: {
    fontSize: "150px",
    margin: "0",
    padding: "0",
    transform: "rotate(90deg)",
  },
  msg: {
    textAlign: "center",
    fontSize: "1.5rem",
    "& .new": {
      backgroundColor: "#1b3191",
      borderRadius: "3px",
      fontSize: "1rem",
      padding: "2px",
    },
  },
};
