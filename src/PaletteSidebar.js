import React, { Component } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
// import Slider from "rc-slider";
import Logo from "./imgs/new_logo.png";
import styles from "./styles/PaletteSidebarStyles";
import "rc-slider/assets/index.css";
import {
  FormControl,
  FormLabel,
  InputLabel,
  Slider,
  Typography,
} from "@material-ui/core";

class PaletteSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: "hex",
      open: false,
    };
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }
  handleFormatChange(e) {
    this.setState({ format: e.target.value, open: true });
    this.props.changeFormat(e.target.value);
  }
  closeSnackbar() {
    this.setState({ open: false });
  }
  render() {
    const { level, changeLevel, showSlider, classes } = this.props;
    const { format, open } = this.state;

    return (
      <nav className={classes.Sidebar}>
        <img
          className={classes.SidebarLogo}
          src={Logo}
          alt="Color Palettes Logo"
        />

        <FormControl className={classes.SelectContainer}>
          <FormLabel component="legend" id="format-label">
            Code Format:
          </FormLabel>
          <Select
            aria-labelledby="format-label"
            className={classes.SelectField}
            value={format}
            onChange={this.handleFormatChange}>
            <MenuItem value="hex">HEX</MenuItem>
            <MenuItem value="rgb">RGB</MenuItem>
            <MenuItem value="rgba">RGBA</MenuItem>
          </Select>
        </FormControl>

        {showSlider && (
          <div className={classes.Slider}>
            <Slider
              orientation="vertical"
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onChange={changeLevel}
              valueLabelDisplay="auto"
              classes={{
                track: classes.SliderTrack,
                thumb: classes.SliderThumb,
                rail: classes.SliderRail,
              }}
            />
            <Typography gutterBottom className={classes.SliderLabel}>
              Shade: {level}
            </Typography>
          </div>
        )}

        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          open={open}
          autoHideDuration={3000}
          message={
            <span id="message-id">
              Format Changed to {format.toUpperCase()}
            </span>
          }
          ContentProps={{
            "aria-describedby": "message-id",
          }}
          onClose={this.closeSnackbar}
          action={[
            <IconButton
              onClick={this.closeSnackbar}
              color="inherit"
              key="close"
              aria-label="close">
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </nav>
    );
  }
}

export default withStyles(styles)(PaletteSidebar);
