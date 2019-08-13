import React, { Component } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

class PaletteMetaForm extends Component {
	constructor (props) {
		super(props);
		this.state = {
			open: true,
			emojiDialogOpen: false
		};
		this.handleChange = this.handleChange.bind(this);
		this.savePalette = this.savePalette.bind(this);
	}
	componentDidMount () {
		ValidatorForm.addValidationRule("isPaletteNameUnique", (value) => {
			return this.props.palettes.every(
				({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
			);
		});
		ValidatorForm.addValidationRule("isPaletteNameNotSame", (value) => {
			return this.props.palettes.every(({ paletteName, id }) => {
				return (
					paletteName.toLowerCase() !== value.toLowerCase() ||
					id === this.props.editPaletteId
				);
			});
		});
	}
	handleChange (event) {
		this.props.handleNameChange(event);
	}
	savePalette (emoji) {
		this.setState({
			emojiDialogOpen: false
		});
		this.props.handleSavePalette(emoji.native);
	}
	render () {
		const { handleDialogOpen, newPaletteName, editPaletteId } = this.props;
		const { open, emojiDialogOpen } = this.state;
		const editModeOn = editPaletteId !== "";
		const paletteValidators = [
			"required",
			editModeOn ? "isPaletteNameNotSame" : "isPaletteNameUnique"
		];
		return (
			<div>
				<Dialog open={emojiDialogOpen} onClose={handleDialogOpen}>
					<DialogTitle id="form-dialog-title">
						Choose a Palette Emoji
					</DialogTitle>
					<Picker
						title={editModeOn ? "Current Emoji" : "Choose Emoji"}
						emoji="point_up"
						onSelect={this.savePalette}
					/>
				</Dialog>
				<Dialog
					open={open}
					onClose={handleDialogOpen}
					aria-labelledby="form-dialog-title">
					<ValidatorForm
						onSubmit={() => {
							this.setState({ open: false, emojiDialogOpen: true });
						}}>
						<DialogTitle id="form-dialog-title">
							Choose a Palette Name
						</DialogTitle>
						<DialogContent>
							<DialogContentText>
								Select a name for your awesome Palette. Make sure it is unique
								so that, later, you can find it easily!
							</DialogContentText>
							<TextValidator
								name="newPaletteName"
								label="Palette Name"
								value={newPaletteName}
								onChange={this.handleChange}
								fullWidth={true}
								validators={paletteValidators}
								errorMessages={[
									"This field is required",
									"Enter Unique Palette Name!"
								]}
							/>
						</DialogContent>
						<DialogActions>
							<Button onClick={handleDialogOpen} color="primary">
								Cancel
							</Button>
							<Button variant="contained" color="primary" type="submit">
								Next
							</Button>
						</DialogActions>
					</ValidatorForm>
				</Dialog>
			</div>
		);
	}
}

export default PaletteMetaForm;
