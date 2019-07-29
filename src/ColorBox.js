import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import clsx from "clsx";
import styles from "./styles/ColorBoxStyles";

class ColorBox extends Component {
	static props = {
		isSinglePalette: false
	};
	constructor (props) {
		super(props);
		this.state = {
			isCopied: false
		};
		this.changeCopyState = this.changeCopyState.bind(this);
	}
	changeCopyState () {
		this.setState({ isCopied: true }, () => {
			setTimeout(() => {
				this.setState({ isCopied: false });
			}, 1500);
		});
	}
	render () {
		const { name, color, moreUrl, showLink, classes } = this.props;
		const { isCopied } = this.state;

		return (
			<div className={classes.ColorBox}>
				<div
					className={clsx(classes.ColorBoxCopyOverlay, {
						[classes.ColorBoxCopyOverlayShow]: isCopied
					})}
				/>
				<div
					className={clsx(classes.ColorBoxCopyMsg, {
						[classes.ColorBoxCopyMsgShow]: isCopied
					})}>
					<h1>copied!</h1>
					<p className={classes.darkText}>{color}</p>
				</div>
				<CopyToClipboard text={color} onCopy={this.changeCopyState}>
					<button className={classes.ColorBoxCopyBtn}>Copy</button>
				</CopyToClipboard>
				<div className={classes.ColorBoxInfo}>
					<span>{name}</span>
					{showLink && (
						<Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
							<span className={classes.ColorBoxMore}>MORE</span>
						</Link>
					)}
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(ColorBox);
