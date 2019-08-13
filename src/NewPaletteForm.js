import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { arrayMove } from "react-sortable-hoc";
import clsx from "clsx";
import DragableColorList from "./DragableColorList";
import NewPaletteDrawer from "./NewPaletteDrawer";
import PaletteFormNav from "./PaletteFormNav";
import seedColors from "./seedColors";
import styles from "./styles/NewPaletteFormStyles";

class NewPaletteForm extends Component {
	static defaultProps = {
		editPalette: {
			colors: seedColors[0].colors,
			editPaletteId: "",
			paletteName: ""
		}
	};
	constructor (props) {
		super(props);
		this.state = {
			open: false,
			newColorName: "",
			newPaletteName: this.props.editPalette.paletteName,
			currentColor: "#000000",
			editColorId: "",
			editPaletteId: this.props.editPalette.id,
			colors: this.props.editPalette.colors
		};
		this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
		this.handleDrawerClose = this.handleDrawerClose.bind(this);
		this.handleSavePalette = this.handleSavePalette.bind(this);
		this.addNewColor = this.addNewColor.bind(this);
		this.removeColor = this.removeColor.bind(this);
		this.updateColor = this.updateColor.bind(this);
		this.clearPalette = this.clearPalette.bind(this);
		this.addRandomColor = this.addRandomColor.bind(this);
		this.openEditor = this.openEditor.bind(this);
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleColorChange = this.handleColorChange.bind(this);
	}
	onSortEnd = ({ oldIndex, newIndex }) => {
		this.setState(({ colors }) => ({
			colors: arrayMove(colors, oldIndex, newIndex)
		}));
	};
	handleDrawerOpen () {
		this.setState({
			open: true
		});
	}
	handleDrawerClose () {
		this.setState({
			open: false,
			editColorId: ""
		});
	}
	handleSavePalette (emoji) {
		let paletteId = this.state.newPaletteName.toLowerCase().replace(/ /g, "-");
		let newPalette = {
			paletteName: this.state.newPaletteName,
			id: paletteId,
			emoji: emoji,
			colors: this.state.colors
		};
		this.props.savePalette(newPalette, this.state.editPaletteId);
		this.props.history.push("/");
	}
	addNewColor () {
		this.setState((currState) => ({
			colors: [
				...this.state.colors,
				{ color: currState.currentColor, name: currState.newColorName }
			],
			newColorName: "",
			currentColor: "#000000"
		}));
	}
	removeColor (colorName) {
		let newColorList = this.state.colors.filter(
			(color) => color.name !== colorName
		);
		if (this.state.editColorId === colorName)
			this.setState({ editColorId: "" });
		this.setState({ colors: newColorList });
	}
	updateColor () {
		this.setState((currState) => ({
			open: false,
			editColorId: "",
			newColorName: "",
			currentColor: "#000000",
			colors: currState.colors.filter((color) => {
				if (color.name === this.state.editColorId) {
					color.name = this.state.newColorName;
					color.color = this.state.currentColor;
				}
				return true;
			})
		}));
	}
	openEditor (name, color) {
		this.setState({
			open: true,
			newColorName: name,
			currentColor: color,
			editColorId: name
		});
		// console.log(this.state.newColorName, this.state.currentColor);
	}
	handleColorChange (color) {
		this.setState({
			currentColor: color.hex
		});
	}
	handleNameChange (event) {
		this.setState({ [event.target.name]: event.target.value });
	}
	clearPalette () {
		this.setState({
			colors: []
		});
	}
	addRandomColor () {
		let totalPalettes = seedColors.length - 1;
		let randPalette = Math.floor(Math.random() * totalPalettes) + 1;
		let totalColors = seedColors[randPalette].colors.length;
		let randColorNo = Math.floor(Math.random() * totalColors);
		let randomColor = seedColors[randPalette].colors[randColorNo];
		let colorAlreadyExists = this.state.colors.some(
			(color) => color.name === randomColor.name
		);
		if (!colorAlreadyExists) {
			this.setState((currState) => ({
				colors: [ ...currState.colors, randomColor ]
			}));
		}
		else {
			this.addRandomColor();
		}
	}
	render () {
		const { classes, palettes } = this.props;
		const { open, colors, newPaletteName, editPaletteId } = this.state;
		return (
			<div className={classes.root}>
				<PaletteFormNav
					open={open}
					palettes={palettes}
					editPaletteId={editPaletteId}
					newPaletteName={newPaletteName}
					handleSavePalette={this.handleSavePalette}
					handleDrawerOpen={this.handleDrawerOpen}
					handleNameChange={this.handleNameChange}
				/>
				<NewPaletteDrawer
					{...this.state}
					clearPalette={this.clearPalette}
					handleDrawerClose={this.handleDrawerClose}
					handleNameChange={this.handleNameChange}
					handleColorChange={this.handleColorChange}
					addNewColor={this.addNewColor}
					addRandomColor={this.addRandomColor}
					updateColor={this.updateColor}
				/>
				<main
					className={clsx(classes.content, {
						[classes.contentShift]: open
					})}>
					<div className={classes.drawerHeader} />
					<DragableColorList
						colors={colors}
						removeColor={this.removeColor}
						openEditor={this.openEditor}
						axis="xy"
						onSortEnd={this.onSortEnd}
						distance={20}
					/>
				</main>
			</div>
		);
	}
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
