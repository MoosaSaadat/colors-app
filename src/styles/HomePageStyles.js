import size from "../size";
import { fadeTransitionTime } from "../constants";
import bg from "../imgs/bg_pattern.svg";

export default {
  "@global": {
    ".fade-exit": {
      opacity: "1",
    },
    ".fade-exit-active": {
      opacity: "0",
      transition: `opacity ${fadeTransitionTime}ms ease-out`,
    },
  },
  root: {
    height: "100vh",
    width: "85vw",
    marginLeft: "15vw",
    paddingLeft: "2.5vw",
    paddingRight: "2.5vw",
    overflow: "auto",
    boxSizing: "border-box",
    backgroundColor: "#ffffff",
    backgroundImage: `url(${bg})`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
  },
  Sidebar: {
    position: "fixed",
    top: "0",
    left: "0",
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "100vh",
    width: "15vw",
    zIndex: "10",
    backgroundColor: "white",
    boxShadow:
      "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
  },
  SidebarLogo: {
    maxWidth: "100%",
    marginBottom: "1rem",
    boxSizing: "border-box",
  },
  Tabs: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  Tab: {
    position: "relative",
    width: "100%",
    height: "100%",
    paddingLeft: "2rem",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    color: "#303030",
    "&:before": {
      display: "block",
      content: "''",
      width: "80%",
      height: "1px",
      position: "absolute",
      top: "0",
      left: "0",
      marginLeft: "10%",
      backgroundColor: "#303030",
    },
    "&:hover": {
      cursor: "pointer",
      color: "white",
      transition: "0.2s ease-in-out",
    },
    "&:hover:before": {
      height: "101%",
      width: "100%",
      marginLeft: "0",
      zIndex: "-1",
      transition: "0.2s ease-in-out",
    },
  },
  TabIcon: {
    marginRight: "1rem",
    fontSize: "2rem",
  },
};
