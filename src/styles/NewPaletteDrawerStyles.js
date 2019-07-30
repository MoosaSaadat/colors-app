import { drawerWidth } from "../constants";

export default (theme) => ({
	drawer: {
		width: drawerWidth,
		flexShrink: 0
	},
	drawerPaper: {
		width: drawerWidth,
		maxWidth: "100vw",
		maxHeight: "100vh",
		display: "flex",
		alignItems: "center"
	},
	drawerHeader: {
		display: "flex",
		width: "100%",
		height: "10%",
		alignItems: "center",
		padding: "0 8px",
		...theme.mixins.toolbar,
		justifyContent: "flex-end"
	},
	container: {
		width: "90%",
		height: "90%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "center"
	},
	buttons: {
		width: "100%",
		height: "10%",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center"
	},
	button: {
		// width: "45%"
		// margin: "auto 2.5%"
	}
});
