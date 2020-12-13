import sizes from "../size";

export default {
  Navbar: {
    position: "fixed",
    top: "0",
    left: "15vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "7vh",
    width: "85vw",
    fontSize: "20px",
    fontWeight: "bold",
    textTransform: "capitalize",
    zIndex: "10",
    backgroundColor: "white",
    boxShadow:
      "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
  },
  CreatorName: {
    fontSize: "16px",
    fontWeight: "normal",
    fontStyle: "italic",
    textTransform: "none",
    marginLeft: "10px",
  },
  BackButton: {
    height: "100%",
    width: "4rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ececec",
    marginRight: "1rem",
    [sizes.down("xs")]: {
      marginRight: "5px",
      padding: "0 5px",
    },
  },
  BackLink: {
    display: "block",
    color: "black",
    textDecoration: "none",
    height: "2rem",
  },
  BackIcon: {
    fontSize: "2rem",
  },
  LikeButton: {
    height: "100%",
    width: "4rem",
    marginLeft: "auto",
    marginRight: "5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    [sizes.down("xs")]: {
      marginRight: "5px",
      padding: "0 5px",
    },
  },
  LikeLink: {
    height: "100%",
    color: "black",
    textDecoration: "none",
  },
  LikeIcon: {
    height: "100%",
    fontSize: "2rem",
    "&:hover": {
      fontSize: "2.5rem",
      transition: "0.2s ease-in-out",
    },
  },
  LikeCount: {
    fontSize: "18px",
    fontWeight: "normal",
  },
};
