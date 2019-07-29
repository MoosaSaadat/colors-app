import chroma from "chroma-js";
import sizes from "../size";

export default {
	root: {
		backgroundColor: (props) => props.bgColor,
		width: "20%",
		height: "25%",
		margin: "0 auto",
		display: "inline-block",
		position: "relative",
		cursor: "move",
		marginBottom: "-5px",
		[sizes.down("lg")]: {
			width: "25%",
			height: "20%"
		},
		[sizes.down("md")]: {
			width: "50%",
			height: "20%"
		},
		[sizes.down("sm")]: {
			width: "100%",
			height: "10%"
		}
	},
	info: {
		boxSizing: "border-box",
		display: "flex",
		justifyContent: "space-between",
		position: "absolute",
		bottom: "0px",
		width: "100%",
		padding: "5px 10px",
		fontSize: "12px",
		textTransform: "uppercase",
		letterSpacing: "1px",
		color: (props) =>
			chroma(props.bgColor).luminance() < 0.2 ? "white" : "rgba(0,0,0,0.5)",
		"& span": {
			width: "50%",
			wordWrap: "break-word"
		}
	},
	editIcon: {
		transition: "all 0.3s ease-in-out",
		cursor: "pointer",
		color: "rgba(0,0,0,0.5)",
		backgroundColor: "rgba(255,255,255,0.5)",
		borderRadius: "2px",
		marginRight: "5px",
		"&:hover": {
			color: "white",
			transform: "scale(1.3)"
		}
	},
	deleteIcon: {
		transition: "all 0.3s ease-in-out",
		cursor: "pointer",
		color: "rgba(0,0,0,0.5)",
		backgroundColor: "rgba(255,255,255,0.5)",
		borderRadius: "2px",
		"&:hover": {
			color: "white",
			transform: "scale(1.3)"
		}
	}
};
