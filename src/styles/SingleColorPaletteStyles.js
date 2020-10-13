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
		position: "relative",
		textTransform: "uppercase",
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
