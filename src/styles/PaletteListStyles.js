import sizes from "../size";
import { fadeTransitionTime } from "../constants";
import bg from "../imgs/bg_pattern.svg";

export default {
  container: {
    width: "100%",
    margin: "5vh auto 10vh auto",
  },
  palettes: {
    width: "100%",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
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
