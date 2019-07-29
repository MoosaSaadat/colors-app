import sizes from "../size";
import { fadeTransitionTime } from "../constants";

export default {
	"@global": {
		".fade-exit": {
			opacity: "1"
		},
		".fade-exit-active": {
			opacity: "0",
			transition: `opacity ${fadeTransitionTime}ms ease-out`
		}
	},
	root: {
		background: "blue",
		height: "100vh",
		overflow: "auto",
		fontFamily: [ "Handlee", "cursive" ],
		backgroundImage: "linear-gradient(-45deg, #30cfd0 0%, #330867 100%)"
	},
	container: {
		width: "50%",
		margin: "10px auto 50px auto",
		[sizes.down("lg")]: {
			width: "60%"
		},
		[sizes.down("sm")]: {
			width: "40%"
		},
		[sizes.down("xs")]: {
			width: "50%"
		}
	},
	nav: {
		width: "100%",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		fontWeight: "normal",
		color: "white",
		"& a": {
			boxShadow: "1px 1px 3px #283441",
			background: "#1b3191",
			textDecoration: "none",
			color: "white",
			padding: "10px 20px",
			border: "none",
			borderRadius: "0px",
			transition: "all 100ms ease-out"
		},
		"& a:hover": {
			background: "#09215a"
		},
		[sizes.down("sm")]: {
			textAlign: "center"
		}
	},
	palettes: {
		boxSizing: "border-box",
		width: "100%",
		display: "grid",
		gridTemplateColumns: "repeat(3, 32%)",
		gridGap: "20px",
		[sizes.down("md")]: {
			gridTemplateColumns: "repeat(2, 50%)"
		},
		[sizes.down("sm")]: {
			gridTemplateColumns: "repeat(1, 100%)"
		}
	},
	emptyList: {
		width: "100%",
		padding: "2rem",
		display: "flex",
		flexFlow: "column wrap",
		boxSizing: "border-box",
		backgroundColor: "rgba(255,255,255,0.5)",
		boxShadow: "1px 1px 3px #283441",
		color: "white",
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center"
	},
	icon: {
		fontSize: "150px",
		margin: "0",
		padding: "0",
		transform: "rotate(90deg)"
	},
	msg: {
		color: "white",
		textAlign: "center",
		fontSize: "1.5rem",
		"& .new": {
			backgroundColor: "#1b3191",
			borderRadius: "3px",
			fontSize: "1rem",
			padding: "2px"
		}
	}
};
