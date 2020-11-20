import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import Logo from "./imgs/new_logo.png";
import styles from "./styles/HomePageStyles";
import {
  FavoriteBorderOutlined,
  HomeOutlined,
  ColorLensOutlined,
  ShowChartOutlined,
} from "@material-ui/icons";
import PaletteList from "./PaletteList";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      something: true,
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <nav className={classes.Sidebar}>
          <img
            className={classes.SidebarLogo}
            src={Logo}
            alt="Color Palettes Logo"
          />
          <div className={classes.Tabs}>
            <div className={classes.Tab}>
              <HomeOutlined className={classes.TabIcon} />
              Home
            </div>
            <div className={classes.Tab}>
              <FavoriteBorderOutlined className={classes.TabIcon} />
              Likes
            </div>
            <div className={classes.Tab}>
              <ColorLensOutlined className={classes.TabIcon} />
              Latest
            </div>
            <div className={classes.Tab}>
              <ShowChartOutlined className={classes.TabIcon} />
              Popular
            </div>
          </div>
        </nav>
        <PaletteList {...this.props} />
      </div>
    );
  }
}

export default withStyles(styles)(HomePage);
