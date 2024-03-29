export default (theme) => ({
	root: {
		background: "white",
		padding: "0.5rem",
		position: "relative",
		overflow: "hidden",
		cursor: "pointer",
		boxShadow: "1px 1px 3px #283441",
		"&:hover svg": {
			opacity: "1"
		}
	},
	colors: {
		background: "white",
		width: "100%",
		height: "150px",
		display: "flex",
		overflow: "hidden",
		flexFlow: "row wrap",
		alignItems: "flex-start",
		alignContent: "flex-start",
		justifyContent: "flex-start"
	},
	title: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		margin: "0",
		color: "black",
		paddingTop: "0.5rem",
		fontSize: "1rem",
		position: "relative"
	},
	emoji: {
		marginLeft: "0.5rem",
		fontSize: "1.5rem"
	},
	miniColorBox: {
		height: "25%",
		width: "20%"
	},
	iconContainer: {
		width: "100%",
		display: "flex",
		justifyContent: "flex-end",
		position: "absolute",
		top: "0",
		left: "0",
		zIndex: "10",
		color: "white"
	},
	editIcon: {
		backgroundColor: "#1b3191",
		padding: "10px",
		width: "20px",
		height: "20px",
		opacity: "1",
		transition: "all 0.2s ease-in-out",
		[theme.breakpoints.up("md")]: {
			opacity: "0"
		}
	},
	deleteIcon: {
		backgroundColor: "#eb3d30",
		padding: "10px",
		width: "20px",
		height: "20px",
		opacity: "1",
		transition: "all 0.2s ease-in-out",
		[theme.breakpoints.up("md")]: {
			opacity: "0"
		}
	}
});
