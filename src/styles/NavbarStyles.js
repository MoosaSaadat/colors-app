import sizes from "../size";

export default {
	Navbar: {
		position: "fixed",
		top: "0",
		left: "15vw",
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-start",
		height: "7vh",
		width: "85vw",
		fontSize: "20px",
		fontWeight: "bold",
		zIndex: "10",
		backgroundColor: "white",
		boxShadow:
			"0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)"
	},
	BackButton: {
		height: "100%",
		width: "4rem",
		[sizes.down("xs")]: {
			marginRight: "5px",
			padding: "0 5px"
		}
	},
	BackLink: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		color: "black",
		width: "100%",
		height: "100%",
		textDecoration: "none",
	},
	BackIcon: {
		fontSize: "3rem",
	},
	LikeButton: {
		height: "100%",
		width: "4rem",
		marginLeft: "auto",
		marginRight: "5rem",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		[sizes.down("xs")]: {
			marginRight: "5px",
			padding: "0 5px"
		}
	},
	LikeLink: {
		height: "2rem",
		color: "black",
		textDecoration: "none",
	},
	LikeIcon: {
		fontSize: "2rem",
	},
	LikeCount: {
		fontSize: "18px",
		fontWeight: "normal",
	},
	// Slider: {
	// 	width: "340px",
	// 	margin: "0 10px",
	// 	display: "inline-block",
	// 	"& .rc-slider-track": {
	// 		backgroundColor: "transparent"
	// 	},
	// 	"& .rc-slider-handle, .rc-slider-handle:hover, .rc-slider-handle:active, .rc-slider-handle:focus": {
	// 		background: "green",
	// 		border: "2px solid green",
	// 		outline: "none",
	// 		width: "15px",
	// 		height: "15px",
	// 		boxShadow: "none"
	// 	},
	// 	[sizes.down("sm")]: {
	// 		width: "150px"
	// 	}
	// },
	// selectContainer: {
	// 	marginLeft: "auto",
	// 	marginRight: "1rem"
	// }
};
