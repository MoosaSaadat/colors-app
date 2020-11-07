import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { fadeTransitionTime } from "./constants";
import clsx from "clsx";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";
import MiniPalette from "./MiniPalette";
import styles from "./styles/PaletteListStyles";

class PaletteList extends Component {
	constructor (props) {
		super(props);
		this.state = {
			openDialog: false,
			deleteId: ""
		};
		this.openDialog = this.openDialog.bind(this);
		this.closeDialog = this.closeDialog.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.goToPalette = this.goToPalette.bind(this);
	}
	openDialog (id) {
		this.setState({
			openDialog: true,
			deleteId: id
		});
	}
	closeDialog () {
		this.setState({
			openDialog: false,
			deleteId: ""
		});
	}
	goToPalette (id) {
		this.props.history.push(`/palette/${id}`);
	}
	handleDelete () {
		this.props.deletePalette(this.state.deleteId);
		this.closeDialog();
	}
	render () {
		const { palettes, classes, restorePalettes } = this.props;
		const { openDialog } = this.state;
		let palettesList = palettes.map((palette) => (
			<CSSTransition
				classNames="fade"
				timeout={fadeTransitionTime}
				key={palette.id}>
				<MiniPalette
					{...palette}
					history={this.props.history}
					handleClick={this.goToPalette}
					openDialog={this.openDialog}
				/>
			</CSSTransition>
		));
		const noPalettes = palettes.length === 0;
		if (noPalettes) {
			palettesList = (
				<CSSTransition classNames="fade" timeout={fadeTransitionTime} key={1}>
					<div className={classes.msg}>
						<h3 className={classes.icon}>:(</h3>
						<h2>Oops, You have no Palettes saved!</h2>
						<p>
							Click on <span className="new">New</span> button above to make a
							new Palette<br />
							OR<br />
							Click on the following button to restore default palettes!
						</p>
						<Button
							variant="contained"
							color="primary"
							onClick={restorePalettes}>
							Restore?
						</Button>
					</div>
				</CSSTransition>
			);
		}
		return (
			<div className={classes.root}>
				<div className={classes.container}>
					<nav className={classes.nav}>
						<h1 className={classes.title}>Saved Palettes</h1>
						<Link to="/palette/new">New</Link>
						<Link to="/auth">Auth</Link>
					</nav>
					<TransitionGroup
						className={clsx(
							{ [classes.palettes]: !noPalettes },
							{ [classes.emptyList]: noPalettes }
						)}>
						{palettesList}
					</TransitionGroup>
				</div>
				<Dialog
					open={openDialog}
					aria-labelledby="delete-dialog"
					onClose={this.closeDialog}>
					<DialogTitle id="delete-dialog-title">
						Do you want to Delete this Palette?
					</DialogTitle>
					<List>
						<ListItem button onClick={this.handleDelete}>
							<ListItemAvatar>
								<Avatar
									style={{ backgroundColor: blue[100], color: blue[600] }}>
									<CheckIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText primary="Delete" />
						</ListItem>
						<ListItem button onClick={this.closeDialog}>
							<ListItemAvatar>
								<Avatar style={{ backgroundColor: red[100], color: red[600] }}>
									<CloseIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText primary="Close" />
						</ListItem>
					</List>
				</Dialog>
			</div>
		);
	}
}

export default withStyles(styles)(PaletteList);
