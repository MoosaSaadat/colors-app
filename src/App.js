import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { generatePalette } from "./colorHelpers";
import { pageTransitionTime } from "./constants";
import PaletteList from "./PaletteList";
import Palette from "./Palette";
import NewPaletteForm from "./NewPaletteForm";
import SingleColorPalette from "./SingleColorPalette";
import seedColors from "./seedColors";
import Page from "./Page";
import "./App.css";

class App extends Component {
	constructor (props) {
		super(props);
		const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
		this.state = {
			palettes: savedPalettes || seedColors
		};
		this.savePalette = this.savePalette.bind(this);
		this.deletePalette = this.deletePalette.bind(this);
		this.restorePalettes = this.restorePalettes.bind(this);
	}
	findPalette (id) {
		return this.state.palettes.find((palette) => palette.id === id);
	}
	savePalette (newPalette, editPaletteId) {
		console.log(newPalette, editPaletteId);
		let newPaletteList = [ ...this.state.palettes, newPalette ];
		if (editPaletteId !== "" && editPaletteId !== undefined) {
			newPaletteList = this.state.palettes.map((palette) => {
				if (editPaletteId === palette.id) return newPalette;
				return palette;
			});
		}
		console.log(newPaletteList);
		this.setState((state) => {
			return { palettes: newPaletteList };
		}, this.syncLocalStorage);
	}
	deletePalette (id) {
		this.setState(
			(currState) => ({
				palettes: currState.palettes.filter((palette) => palette.id !== id)
			}),
			this.syncLocalStorage
		);
	}
	restorePalettes () {
		window.localStorage.clear();
		this.setState({ palettes: seedColors });
	}
	syncLocalStorage () {
		window.localStorage.setItem(
			"palettes",
			JSON.stringify(this.state.palettes)
		);
	}
	render () {
		const { location } = this.props;
		return (
			<TransitionGroup>
				<CSSTransition
					classNames="page"
					timeout={pageTransitionTime}
					key={location.pathname}>
					<Switch location={location}>
						<Route
							exact
							path="/palette/new"
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
						<Route
							exact
							path="/palette/edit/:paletteId"
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
						<Route
							exact
							path="/"
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
						<Route
							exact
							path="/palette/:id"
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
						<Route
							exact
							path="/palette/:paletteId/:colorId"
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
						<Redirect to="/" />
					</Switch>
				</CSSTransition>
			</TransitionGroup>
		);
	}
}

export default withRouter(App);
