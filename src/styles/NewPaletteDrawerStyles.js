import { drawerWidth } from "../constants";

export default (theme) => ({
	drawer: {
		width: drawerWidth,
		flexShrink: 0
	},
	drawerPaper: {
		width: drawerWidth,
		display: "flex",
		alignItems: "center"
	},
	drawerHeader: {
		display: "flex",
		alignItems: "center",
		padding: "0 8px",
		...theme.mixins.toolbar,
		justifyContent: "flex-end",
		marginLeft: "auto"
	},
	container: {
		width: "90%",
		height: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center"
	},
	buttons: {
		width: "100%"
	},
	button: {
		width: "45%",
		margin: "auto 1.25%"
	}
});
