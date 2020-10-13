import React, { Component } from "react";
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
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
						<HomeIcon className={classes.BackIcon} />
					</Link>
				</div>
				{name}
				{likes && (
					<div className={classes.LikeButton}>
						<Link to="/" className={classes.LikeLink}>
							<FavoriteBorderIcon className={classes.LikeIcon} />
						</Link>
						<span className={classes.LikeCount}>{likes}</span>
					</div>
				)}
			</nav>
		);
	}
}

export default withStyles(styles)(Navbar);
