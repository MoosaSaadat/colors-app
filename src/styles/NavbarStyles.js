import sizes from "../size";

export default {
	Navbar: {
		position: "fixed",
		top: "0",
		left: "0",
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-start",
		height: "6vh",
		width: "100%",
		zIndex: "1",
		backgroundColor: "white",
		boxShadow:
			"0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)"
	},
	NavbarLogo: {
		height: "100%",
		marginRight: "15px",
		padding: "0 15px",
		backgroundColor: "#eceff1",
		"& a": {
			textDecoration: "none",
			color: "black"
		},
		[sizes.down("xs")]: {
			marginRight: "5px",
			padding: "0 5px"
		}
	},
	Slider: {
		width: "340px",
		margin: "0 10px",
		display: "inline-block",
		"& .rc-slider-track": {
			backgroundColor: "transparent"
		},
		"& .rc-slider-handle, .rc-slider-handle:hover, .rc-slider-handle:active, .rc-slider-handle:focus": {
			background: "green",
			border: "2px solid green",
			outline: "none",
			width: "15px",
			height: "15px",
			boxShadow: "none"
		},
		[sizes.down("sm")]: {
			width: "150px"
		}
	},
	selectContainer: {
		marginLeft: "auto",
		marginRight: "1rem"
	}
};
