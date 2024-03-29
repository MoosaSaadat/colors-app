import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import ColorBox from "./ColorBox";
import styles from "./styles/SingleColorPaletteStyles";

class SingleColorPalette extends Component {
	constructor (props) {
		super(props);
		this._shades = this.gatherShades(this.props.palette, this.props.colorId);
		this.state = {
			format: "hex"
		};
		this.changeFormat = this.changeFormat.bind(this);
	}
	gatherShades (palette, colorToFilterBy) {
		let shades = [];
		let allColors = palette.colors;
		for (let key in allColors) {
			shades = shades.concat(
				allColors[key].filter((color) => color.id === colorToFilterBy)
			);
		}
		return shades.slice(1);
	}
	changeFormat (format) {
		this.setState({ format });
	}
	render () {
		const { classes } = this.props;
		const { paletteName, emoji, id } = this.props.palette;
		const colorBoxes = this._shades.map((color) => (
			<ColorBox
				key={color.name}
				name={color.name}
				color={color[this.state.format]}
				showLink={false}
				isSinglePalette
			/>
		));
		return (
			<div>
				<Navbar changeFormat={this.changeFormat} showSlider={false} />
				<div className={classes.Palette}>
					{colorBoxes}
					<div className={classes.ColorBoxBlack}>
						<Link to={`/palette/${id}`} className={classes.GobackBtn}>
							Go Back
						</Link>
					</div>
				</div>
				<PaletteFooter name={paletteName} emoji={emoji} />
			</div>
		);
	}
}

export default withStyles(styles)(SingleColorPalette);
