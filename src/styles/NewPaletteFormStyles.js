import sizes from "../size";
import { drawerWidth } from "../constants";

export default (theme) => ({
	root: {
		display: "flex"
	},
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
	content: {
		flexGrow: 1,
		minHeight: "calc(100vh - 64px)",
		padding: "0",
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		marginLeft: -drawerWidth,
		[sizes.down("xs")]: {
			minHeight: "calc(100vh - 56px)"
		}
	},
	contentShift: {
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		}),
		marginLeft: 0,
		[sizes.down("xs")]: {
			"& .colorsHideHelper": {
				display: "none"
			}
		}
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
