import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import clsx from "clsx";
import Logo from "./imgs/new_logo.png";
import styles from "./styles/HomePageStyles";
import {
  FavoriteBorderOutlined,
  HomeOutlined,
  ColorLensOutlined,
  ShowChartOutlined,
  KeyboardReturnOutlined,
  Add,
} from "@material-ui/icons";
import PaletteList from "./PaletteList";
import { Fab } from "@material-ui/core";
import firebase from "firebase";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      something: true,
    };
    this.signOutUser = this.signOutUser.bind(this);
  }
  signOutUser() {
    firebase
      .auth()
      .signOut()
      .then(() => this.props.history.push("/signin"));
  }

  render() {
    const { classes, changePalettesView, currView, ...other } = this.props;
    return (
      <div className={classes.root}>
        <nav className={classes.Sidebar}>
          <img
            className={classes.SidebarLogo}
            src={Logo}
            alt="Color Palettes Logo"
          />
          <div className={classes.Tabs}>
            <div
              onClick={() => changePalettesView("home")}
              className={clsx(classes.Tab, {
                [classes.ActiveTab]: currView === "home",
              })}>
              <HomeOutlined className={classes.TabIcon} />
              Home
            </div>
            <div
              onClick={() => changePalettesView("likes")}
              className={clsx(classes.Tab, {
                [classes.ActiveTab]: currView === "likes",
              })}>
              <FavoriteBorderOutlined className={classes.TabIcon} />
              Likes
            </div>
            <div
              onClick={() => changePalettesView("latest")}
              className={clsx(classes.Tab, {
                [classes.ActiveTab]: currView === "latest",
              })}>
              <ColorLensOutlined className={classes.TabIcon} />
              Latest
            </div>
            <div
              onClick={() => changePalettesView("popular")}
              className={clsx(classes.Tab, {
                [classes.ActiveTab]: currView === "popular",
              })}>
              <ShowChartOutlined className={classes.TabIcon} />
              Popular
            </div>
            <div
              className={`${classes.Tab} ${classes.InverseTab}`}
              onClick={this.signOutUser}>
              <KeyboardReturnOutlined className={classes.TabIcon} />
              Sign Out
            </div>
          </div>
        </nav>
        <PaletteList {...other} />
        <Fab
          className={classes.AddBtn}
          color="secondary"
          component={Link}
          to="/palette/new">
          <Add />
        </Fab>
      </div>
    );
  }
}

export default withStyles(styles)(HomePage);
