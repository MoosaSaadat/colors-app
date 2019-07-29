import React, { Component } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import Slider from "rc-slider";
import styles from "./styles/NavbarStyles";
import "rc-slider/assets/index.css";

class Navbar extends Component {
	constructor (props) {
		super(props);
		this.state = {
			format: "hex",
			open: false
		};
		this.handleFormatChange = this.handleFormatChange.bind(this);
		this.closeSnackbar = this.closeSnackbar.bind(this);
	}
	handleFormatChange (e) {
		this.setState({ format: e.target.value, open: true });
		this.props.changeFormat(e.target.value);
	}
	closeSnackbar () {
		this.setState({ open: false });
	}
	render () {
		const { level, changeLevel, showSlider, classes } = this.props;
		const { format, open } = this.state;
		return (
			<nav className={classes.Navbar}>
				<div className={classes.NavbarLogo}>
					<Link to="/">
						<ChevronLeftIcon fontSize="large" />
					</Link>
				</div>
				{showSlider && (
					<div>
						<span>Level: {level}</span>
						<div className={classes.Slider}>
							<Slider
								defaultValue={level}
								min={100}
								max={900}
								step={100}
								onAfterChange={changeLevel}
							/>
						</div>
					</div>
				)}

				<div className={classes.selectContainer}>
					<Select value={format} onChange={this.handleFormatChange}>
						<MenuItem value="hex">HEX - #FFFFFF</MenuItem>
						<MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
						<MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
					</Select>
				</div>
				<Snackbar
					anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
					open={open}
					autoHideDuration={3000}
					message={
						<span id="message-id">
							Format Changed to {format.toUpperCase()}
						</span>
					}
					ContentProps={{
						"aria-describedby": "message-id"
					}}
					onClose={this.closeSnackbar}
					action={[
						<IconButton
							onClick={this.closeSnackbar}
							color="inherit"
							key="close"
							aria-label="close">
							<CloseIcon />
						</IconButton>
					]}
				/>
			</nav>
		);
	}
}

export default withStyles(styles)(Navbar);
