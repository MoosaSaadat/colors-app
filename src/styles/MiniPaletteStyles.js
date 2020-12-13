export default (theme) => ({
  root: {
    background: "#303030",
    padding: "0.5rem",
    position: "relative",
    overflow: "hidden",
    width: "250px",
    height: "200px",
    cursor: "pointer",
    margin: "1rem 2rem",
    boxShadow: "1px 1px 3px #283441",
    "&:hover svg": {
      opacity: "1",
    },
  },
  colors: {
    background: "#303030",
    width: "100%",
    height: "150px",
    display: "flex",
    overflow: "hidden",
    flexFlow: "row wrap",
    alignItems: "flex-start",
    alignContent: "flex-start",
    justifyContent: "flex-start",
  },
  metaInfoContainer: {
    color: "white",
    height: "50px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  metaInfo: {
    display: "flex",
    flexFlow: "column nowrap",
    width: "70%",
  },
  title: {
    fontSize: "1rem",
  },
  creator: {
    fontSize: "0.8rem",
    fontStyle: "italic",
  },
  likesInfo: {
    display: "flex",
    width: "25%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  likeBtn: {
    fontSize: "1.2rem",
    "&:hover": {
      fontSize: "1.5rem",
      transition: "0.2s ease-in-out",
    },
  },
  likedBtn: {
    color: "#f50057",
  },
  likeCount: {
    fontSize: "1rem",
  },
  miniColorBox: {
    height: "25%",
    width: "20%",
  },
  iconContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    position: "absolute",
    top: "0",
    left: "0",
    zIndex: "10",
    color: "white",
  },
  editIcon: {
    backgroundColor: "#1b3191",
    padding: "10px",
    width: "20px",
    height: "20px",
    opacity: "1",
    transition: "all 0.2s ease-in-out",
    [theme.breakpoints.up("md")]: {
      opacity: "0",
    },
  },
  deleteIcon: {
    backgroundColor: "#eb3d30",
    padding: "10px",
    width: "20px",
    height: "20px",
    opacity: "1",
    transition: "all 0.2s ease-in-out",
    [theme.breakpoints.up("md")]: {
      opacity: "0",
    },
  },
});
