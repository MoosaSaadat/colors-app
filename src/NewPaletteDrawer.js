import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ColorPickerForm from "./ColorPickerForm";
import styles from "./styles/NewPaletteDrawerStyles";

class NewPaletteDrawer extends Component {
	render () {
		const {
			classes,
			open,
			addNewColor,
			colors,
			handleDrawerClose,
			handleColorChange,
			handleNameChange,
			clearPalette,
			addRandomColor,
			currentColor,
			newColorName,
			updateColor,
			editColorId
		} = this.props;
		const editModeOn = editColorId !== "";
		return (
			<Drawer
				className={classes.drawer}
				variant="persistent"
				anchor="left"
				open={open}
				classes={{
					paper: classes.drawerPaper
				}}>
				<div className={classes.drawerHeader}>
					<IconButton onClick={handleDrawerClose}>
						<ChevronLeftIcon />
					</IconButton>
				</div>
				<Divider />
				<div className={classes.container}>
					<Typography variant="h5" gutterBottom>
						{editModeOn ? "Update Color" : "Add New Color"}
					</Typography>
					{!editModeOn && (
						<div className={classes.buttons}>
							<Button
								variant="contained"
								color="secondary"
								className={classes.button}
								onClick={clearPalette}>
								Clear Palette
							</Button>
							<Button
								variant="contained"
								color="primary"
								className={classes.button}
								onClick={addRandomColor}>
								Random Color
							</Button>
						</div>
					)}
					<ColorPickerForm
						addNewColor={addNewColor}
						colors={colors}
						newColorName={newColorName}
						currentColor={currentColor}
						editColorId={editColorId}
						updateColor={updateColor}
						handleNameChange={handleNameChange}
						handleColorChange={handleColorChange}
					/>
				</div>
			</Drawer>
		);
	}
}

export default withStyles(styles, { withTheme: true })(NewPaletteDrawer);
