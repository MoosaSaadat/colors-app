import React, { Component } from "react";
import { ChromePicker } from "react-color";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import styles from "./styles/ColorPickerFormStyles";

class ColorPickerForm extends Component {
	constructor (props) {
		super(props);
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleColorChange = this.handleColorChange.bind(this);
	}
	componentDidMount () {
		ValidatorForm.addValidationRule("isColorNameUnique", (value) => {
			return this.props.colors.every(
				({ name }) => name.toLowerCase() !== value.toLowerCase()
			);
		});
		ValidatorForm.addValidationRule("isColorUnique", (value) => {
			return this.props.colors.every(
				(color) =>
					color.color.toLowerCase() !== this.props.currentColor.toLowerCase()
			);
		});
		ValidatorForm.addValidationRule("isNotSameColorName", (value) => {
			if (value.toLowerCase() === this.props.editColorId.toLowerCase())
				return true;
			return this.props.colors.every(
				({ name }) => name.toLowerCase() !== value.toLowerCase()
			);
		});
		ValidatorForm.addValidationRule("isNotSameColor", (value) => {
			return this.props.colors.every((color) => {
				if (color.color.toLowerCase() === this.props.currentColor.toLowerCase())
					return (
						color.name.toLowerCase() === this.props.editColorId.toLowerCase()
					);
				return true;
			});
		});
	}
	handleNameChange (event) {
		this.props.handleNameChange(event);
	}
	handleColorChange (color, event) {
		this.props.handleColorChange(color);
	}
	render () {
		const {
			classes,
			newColorName,
			currentColor,
			addNewColor,
			updateColor,
			editColorId
		} = this.props;
		const editModeOn = editColorId !== "";
		const colorValidators = [
			"required",
			editModeOn ? "isNotSameColorName" : "isColorNameUnique",
			editModeOn ? "isNotSameColor" : "isColorUnique"
		];
		const colorErrorMessages = [
			"This field is required",
			"Color Name must be Unique!",
			"Color Already Exists!"
		];
		return (
			<div>
				<ChromePicker
					color={currentColor}
					className={classes.picker}
					onChangeComplete={this.handleColorChange}
				/>
				<ValidatorForm
					debounceTime={100}
					onSubmit={editModeOn ? updateColor : addNewColor}>
					<TextValidator
						name="newColorName"
						label="Color Name"
						className={classes.colorNameInput}
						margin="normal"
						variant="filled"
						value={newColorName}
						onChange={this.handleNameChange}
						validators={colorValidators}
						errorMessages={colorErrorMessages}
					/>
					<Button
						variant="contained"
						color="primary"
						className={classes.addColor}
						style={{ backgroundColor: currentColor }}
						type="submit">
						{editModeOn ? "Update Color" : "Add Color"}
					</Button>
				</ValidatorForm>
			</div>
		);
	}
}

export default withStyles(styles)(ColorPickerForm);
