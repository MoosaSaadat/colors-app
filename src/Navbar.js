import React, { Component } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import Slider from "rc-slider";
import styles from "./styles/NavbarStyles";
import "rc-slider/assets/index.css";

class Navbar extends Component {
	constructor (props) {
		super(props);
	}
	render () {
		const { name, likes, classes } = this.props;
		return (
			<nav className={classes.Navbar}>
				<div className={classes.BackButton}>
					<Link to="/" className={classes.BackLink}>
						<ChevronLeftIcon className={classes.BackIcon} />
					</Link>
				</div>
				{name}
				<div className={classes.LikeButton}>
					<Link to="/" className={classes.LikeLink}>
						<FavoriteBorderIcon className={classes.LikeIcon} />
					</Link>
					<span className={classes.LikeCount}>{likes}</span>
				</div>
			</nav>
		);
	}
}

export default withStyles(styles)(Navbar);
