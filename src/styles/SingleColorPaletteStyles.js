import sizes from "../size";

export default {
	Palette: {
		height: "93vh",
		overflow: "scroll",
		marginTop: "7vh",
		marginLeft: "15vw",
		display: "flex",
		flexFlow: "row wrap",
		alignItems: "flex-start",
		justifyContent: "flex-start"
	},
	GobackBtn: {
		textDecoration: "none",
	},
	ColorBoxBlack: {
		width: "20%",
		height: "50%",
		background: "none",
		position: "relative",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		textTransform: "uppercase",
		[sizes.down("md")]: {
			width: "100%",
			height: "25%"
		},
		[sizes.down("sm")]: {
			width: "50%",
			height: "20%"
		},
		[sizes.down("xs")]: {
			width: "100%",
			height: "10%"
		}
	}
};
