import chroma from "chroma-js";
import sizes from "../size";

export default {
	ColorBox: {
		backgroundColor: (props) => props.color,
		width: "20%",
		height: (props) => (props.isSinglePalette ? "50%" : "25%"),
		position: "relative",
		textTransform: "uppercase",
		"&:hover button": {
			opacity: "1",
			transition: "0.3s"
		},
		[sizes.down("md")]: {
			width: (props) => (props.isSinglePalette ? "33.33%" : "25%"),
			height: (props) => (props.isSinglePalette ? "25%" : "20%")
		},
		[sizes.down("sm")]: {
			width: (props) => "50%",
			height: (props) => (props.isSinglePalette ? "20%" : "10%")
		},
		[sizes.down("xs")]: {
			width: (props) => "100%",
			height: (props) => (props.isSinglePalette ? "10%" : "10%")
		}
	},
	ColorBoxCopyBtn: {
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
		color: (props) =>
			chroma(props.color).luminance() >= 0.45 ? "rgba(0,0,0,0.5)" : "white",
		outline: "none",
		border: "none",
		background: "rgba(255, 255, 255, 0.3)",
		cursor: "pointer",
		textDecoration: "none",
		opacity: "0",
		zIndex: "1"
	},
	ColorBoxInfo: {
		boxSizing: "border-box",
		position: "absolute",
		bottom: "0px",
		width: "100%",
		padding: "5px",
		fontSize: "12px",
		color: (props) =>
			chroma(props.color).luminance() < 0.4 ? "white" : "rgba(0,0,0,0.5)"
	},
	ColorBoxMore: {
		position: "absolute",
		right: "0px",
		bottom: "0px",
		padding: "5px",
		background: "rgba(255, 255, 255, 0.3)",
		color: (props) =>
			chroma(props.color).luminance() >= 0.45 ? "rgba(0,0,0,0.5)" : "white"
	},
	ColorBoxCopyOverlay: {
		backgroundColor: (props) => props.color,
		width: "100%",
		height: "100%",
		opacity: "0",
		zIndex: "0",
		transform: "scale(0.1)",
		transition: "transform 0.8s ease-in-out"
	},
	ColorBoxCopyOverlayShow: {
		opacity: "1",
		zIndex: "10",
		transform: "scale(100)",
		position: "absolute"
	},
	ColorBoxCopyMsg: {
		position: "fixed",
		top: "0",
		left: "0",
		width: "100vw",
		height: "100vh",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		fontSize: "4rem",
		color: (props) =>
			chroma(props.color).luminance() >= 0.45 ? "rgba(0,0,0,0.5)" : "white",
		transform: "scale(0)",
		opacity: "0",
		zIndex: "-100",
		transition: "transform 0.4s ease-in-out 0.3s"
	},
	ColorBoxCopyMsgShow: {
		opacity: "1",
		zIndex: "11",
		transform: "scale(1)",
		fontWeight: "100",
		fontSize: "2rem",
		color: "rgba(255, 255, 255, 0.3)",
		"& h1": {
			textAlign: "center",
			color: "white",
			textShadow: "4px 3px 0px rgba(0, 0, 0, 0.5)",
			background: "rgba(255, 255, 255, 0.3)",
			width: "100vw",
			display: "block",
			marginBottom: "0px",
			padding: "1rem",
			fontSize: "4rem"
		}
	}
};
