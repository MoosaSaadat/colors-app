import chroma from "chroma-js";
export default (theme) => ({
	root: {
		display: "flex",
		height: "90%",
		flexFlow: "column nowrap",
		alignItems: "center",
		justifyContent: "space-around"
	},
	picker: {
		width: "80% !important",
		[theme.breakpoints.up("sm")]: {
			width: "90% !important"
		}
	},
	addColor: {
		backgroundColor: (props) => props.currentColor,
		color: (props) =>
			chroma(props.currentColor).luminance() < 0.4 ? "white" : "black"
	},
	colorNameInput: {
		width: "100%"
	}
});
