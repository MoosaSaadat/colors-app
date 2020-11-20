import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { generatePalette } from "./colorHelpers";
import { pageTransitionTime } from "./constants";
import PaletteList from "./PaletteList";
import Palette from "./Palette";
import NewPaletteForm from "./NewPaletteForm";
import SingleColorPalette from "./SingleColorPalette";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import seedColors from "./seedColors";
import Page from "./Page";
import PrivateRoute from "./PrivateRoute";
import firebaseConfig from "./firebase-conf";
import firebase from "firebase";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      palettes: [],
      authUser: false,
      userEmail: null,
    };
    this.savePalette = this.savePalette.bind(this);
    this.deletePalette = this.deletePalette.bind(this);
    this.restorePalettes = this.restorePalettes.bind(this);

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
  componentDidMount() {
    // Check User Auth Changes
    firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        this.setState({ authUser: true, userEmail: authUser.email });
        // Check Palettes Changes
        firebase
          .firestore()
          .collection("palettes")
          .where("creator", "==", this.state.userEmail)
          .onSnapshot((querySnapshot) => {
            let savedPalettes = [];
            querySnapshot.forEach((doc) => {
              savedPalettes.push(doc.data());
            });
            console.log(savedPalettes);
            this.setState({
              palettes: savedPalettes,
            });
          });
      } else {
        this.setState({ authUser: false, userEmail: null });
      }
    });
  }
  findPalette(id) {
    return this.state.palettes.find((palette) => palette.id === id);
  }
  savePalette(newPalette, editPaletteId) {
    // console.log(newPalette, editPaletteId);
    let timestamp = Date.now();
    newPalette = {
      ...newPalette,
      timestamp: timestamp,
      creator: this.state.userEmail,
      likes: 0,
    };
    let newPaletteList = [...this.state.palettes, newPalette];
    if (editPaletteId !== "" && editPaletteId !== undefined) {
      newPaletteList = this.state.palettes.map((palette) => {
        if (editPaletteId === palette.id)
          return { ...newPalette, likes: palette.likes };
        return palette;
      });
    }
    // console.log(newPaletteList);
    // console.log(this.state.userEmail);
    this.setState(
      (state) => {
        return { palettes: newPaletteList };
      },
      () => this.addToDB(newPalette, editPaletteId)
    );
  }
  deletePalette(id) {
    this.removeFromDB(id);
  }
  // restorePalettes() {
  //   window.localStorage.clear();
  //   this.setState({ palettes: seedColors });
  // }
  removeFromDB(editPaletteId) {
    let docID = `${this.state.userEmail}~${editPaletteId}`;
    firebase
      .firestore()
      .collection("palettes")
      .doc(docID)
      .delete()
      .then(() => {
        // Update User Collection
        firebase
          .firestore()
          .collection("users")
          .doc(this.state.userEmail)
          .update({
            saved: firebase.firestore.FieldValue.arrayRemove(docID),
          })
          .catch((error) => alert(error.message));
      })
      .catch((error) => alert(error.message));
  }
  addToDB(palette, editPaletteId) {
    let docID = `${this.state.userEmail}~${palette.id}`;
    // Update Palette Collection
    firebase
      .firestore()
      .collection("palettes")
      .doc(docID)
      .set(palette)
      .then(() => {
        // Update User Collection
        firebase
          .firestore()
          .collection("users")
          .doc(this.state.userEmail)
          .update({
            saved: firebase.firestore.FieldValue.arrayUnion(docID),
          })
          .catch((error) => alert(error.message));
      })
      .catch((error) => alert(error.message));
    // Remove Previous ID
    if (
      editPaletteId !== "" &&
      editPaletteId !== undefined &&
      editPaletteId != palette.id
    ) {
      this.removeFromDB(editPaletteId);
    }
  }
  render() {
    const { location } = this.props;
    return (
      <TransitionGroup>
        <CSSTransition
          classNames="page"
          timeout={pageTransitionTime}
          key={location.pathname}>
          <Switch location={location}>
            <PrivateRoute
              exact
              path="/palette/new"
              authUser={this.state.authUser}
              render={(routeProps) => (
                <Page>
                  <NewPaletteForm
                    savePalette={this.savePalette}
                    palettes={this.state.palettes}
                    {...routeProps}
                  />
                </Page>
              )}
            />
            <PrivateRoute
              exact
              path="/palette/edit/:paletteId"
              authUser={this.state.authUser}
              render={(routeProps) => (
                <Page>
                  <NewPaletteForm
                    savePalette={this.savePalette}
                    palettes={this.state.palettes}
                    editPalette={this.findPalette(
                      routeProps.match.params.paletteId
                    )}
                    {...routeProps}
                  />
                </Page>
              )}
            />
            <PrivateRoute
              exact
              path="/"
              authUser={this.state.authUser}
              render={(routeProps) => (
                <Page>
                  <PaletteList
                    palettes={this.state.palettes}
                    {...routeProps}
                    deletePalette={this.deletePalette}
                    restorePalettes={this.restorePalettes}
                  />
                </Page>
              )}
            />
            <PrivateRoute
              exact
              path="/palette/:id"
              authUser={this.state.authUser}
              render={(routeProps) => (
                <Page>
                  <Palette
                    palette={generatePalette(
                      this.findPalette(routeProps.match.params.id)
                    )}
                  />
                </Page>
              )}
            />
            <PrivateRoute
              exact
              path="/palette/:paletteId/:colorId"
              authUser={this.state.authUser}
              render={(routeProps) => (
                <Page>
                  <SingleColorPalette
                    colorId={routeProps.match.params.colorId}
                    palette={generatePalette(
                      this.findPalette(routeProps.match.params.paletteId)
                    )}
                  />
                </Page>
              )}
            />
            <PrivateRoute
              exact
              path="/signin"
              authUser={this.state.authUser}
              render={(routeProps) => (
                <Page>
                  <SignInForm {...routeProps} />
                </Page>
              )}
            />
            <PrivateRoute
              exact
              path="/signup"
              authUser={this.state.authUser}
              render={(routeProps) => (
                <Page>
                  <SignUpForm {...routeProps} />
                </Page>
              )}
            />
            <Redirect to="/" />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default withRouter(App);
