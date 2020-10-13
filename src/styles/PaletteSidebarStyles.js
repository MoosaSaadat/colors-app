import sizes from "../size";

export default {
	Sidebar: {
		position: "fixed",
		top: "0",
		left: "0",
    display: "flex",
    flexFlow: "column wrap",
		alignItems: "center",
		justifyContent: "space-between",
		height: "100vh",
		width: "15vw",
		zIndex: "10",
		backgroundColor: "white",
		boxShadow:
			"0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)"
  },
  SidebarLogo: {
    maxWidth: "100%",
    maxHeight: "auto",
		padding: "15px",
		backgroundColor: "#eeeeee",
		marginBottom: "1rem",
		boxSizing: "border-box"
  },
	SelectContainer: {
		maxWidth: "80%",
	},
	SelectField: {
		fontSize: "14px"
	},
	Slider: {
		height: "40vh",
		marginBottom: "2rem",
		display: "flex",
		flexFlow: "column",
		alignItems: "center"
	},
	SliderTrack: {
		display: "none"
	},
	SliderRail: {
		width: "5px !important",
	},
	SliderThumb: {
		width: "15px",
		height: "15px",
	},
};
