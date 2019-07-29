import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import PaletteMetaForm from "./PaletteMetaForm";
import styles from "./styles/PaletteFormNavStyles";

class PaletteFormNav extends Component {
	constructor (props) {
		super(props);
		this.state = {
			isDialogopen: false
		};
		this.handleDialogOpen = this.handleDialogOpen.bind(this);
	}
	handleDialogOpen () {
		this.setState((currState) => ({ isDialogopen: !currState.isDialogopen }));
	}
	render () {
		const { isDialogopen } = this.state;
		const {
			open,
			classes,
			palettes,
			editPaletteId,
			handleSavePalette,
			handleDrawerOpen,
			handleNameChange,
			newPaletteName,
			animDir
		} = this.props;
		return (
			<div className={classes.root}>
				<CssBaseline />
				<AppBar
					position="fixed"
					color="default"
					className={clsx(classes.appBar, {
						[classes.appBarShift]: open
					})}>
					<Toolbar>
						<IconButton
							color="inherit"
							aria-label="Open drawer"
							onClick={handleDrawerOpen}
							edge="start"
							className={clsx((classes.menuButton, open && classes.hide))}>
							<MenuIcon />
						</IconButton>
						<Typography
							variant="h6"
							noWrap
							className={clsx(classes.heading, "hideHelper")}>
							Create Your Own Palette!
						</Typography>
					</Toolbar>
					<div className={clsx(classes.navBtns, "hideHelper")}>
						<Link to="/">
							<Button
								variant="contained"
								color="secondary"
								className={classes.button}
								onClick={animDir}>
								GO BACK
							</Button>
						</Link>
						<Button
							variant="contained"
							color="primary"
							onClick={this.handleDialogOpen}
							className={classes.button}>
							Save
						</Button>
					</div>
				</AppBar>
				{isDialogopen && (
					<PaletteMetaForm
						palettes={palettes}
						editPaletteId={editPaletteId}
						handleSavePalette={handleSavePalette}
						handleDialogOpen={this.handleDialogOpen}
						handleNameChange={handleNameChange}
						newPaletteName={newPaletteName}
					/>
				)}
			</div>
		);
	}
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav);
