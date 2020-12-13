import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import PaletteSidebar from "./PaletteSidebar";
import styles from "./styles/PaletteStyles";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500,
      format: "hex",
    };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }
  changeLevel(e, level) {
    this.setState({ level });
  }
  changeFormat(format) {
    this.setState({ format });
  }
  render() {
    const { classes } = this.props;
    const { colors, paletteName, creator, likes, id } = this.props.palette;
    console.log(this.props.palette);
    const colorBoxes = colors[this.state.level].map((color) => (
      <ColorBox
        color={color[this.state.format]}
        name={color.name}
        key={color.id}
        moreUrl={`/palette/${id}/${color.id}`}
        showLink={true}
      />
    ));
    return (
      <div>
        <Navbar name={paletteName} creator={creator} likes={likes} />
        <PaletteSidebar
          level={this.state.level}
          changeLevel={this.changeLevel}
          changeFormat={this.changeFormat}
          showSlider={true}
        />
        <div className={classes.Palette}>{colorBoxes}</div>
        {/* <PaletteFooter name={paletteName} emoji={emoji} /> */}
      </div>
    );
  }
}

export default withStyles(styles)(Palette);
