import sizes from "../size";

export default {
	Sidebar: {
		position: "fixed",
		top: "0",
		left: "0",
    display: "flex",
    flexFlow: "column wrap",
		alignItems: "center",
		justifyContent: "flex-start",
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
		marginBottom: "1rem",
		boxSizing: "border-box"
  },
	SelectContainer: {
		width: "85%",
		marginBottom: "1rem",
		flexFlow: "row nowrap",
		alignItems: "center",
		justifyContent: "space-between",
	},
	SelectField: {
		fontSize: "14px"
	},
	Slider: {
		height: "40vh",
		marginBottom: "1rem",
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
	SliderLabel: {
		fontSize: "1rem",
		color: "rgba(0, 0, 0, 0.54)",
		marginTop: "2rem",
	},
};
