import sizes from "../size";

export default {
	Palette: {
		height: "90vh",
		overflow: "scroll",
		marginTop: "6vh",
		display: "flex",
		flexFlow: "row wrap",
		alignItems: "flex-start",
		justifyContent: "flex-start"
	},
	GobackBtn: {
		width: "100%",
		height: "30px",
		position: "absolute",
		top: "50%",
		left: "50%",
		marginLeft: "-50%",
		marginTop: "-15px",
		fontSize: "20px",
		textTransform: "uppercase",
		lineHeight: "30px",
		textAlign: "center",
		color: "white",
		outline: "none",
		border: "none",
		background: "rgba(255, 255, 255, 0.3)",
		cursor: "pointer",
		textDecoration: "none"
	},
	ColorBoxBlack: {
		width: "20%",
		height: "50%",
		background: "black",
		// display: "inline-block",
		position: "relative",
		textTransform: "uppercase",
		// marginBottom: "-4px",
		"&:hover button": {
			opacity: "1",
			transition: "0.3s"
		},
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
