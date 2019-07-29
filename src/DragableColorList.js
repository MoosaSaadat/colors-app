import React from "react";
import DragableColorBox from "./DragableColorBox";
import { withStyles } from "@material-ui/core/styles";
import { SortableContainer } from "react-sortable-hoc";
import styles from "./styles/DragableColorListStyles";

const DragableColorList = SortableContainer(
	({ colors, removeColor, classes, openEditor }) => {
		return (
			<div className={classes.root}>
				{colors.map((color, i) => (
					<DragableColorBox
						index={i}
						key={color.name}
						bgColor={color.color}
						name={color.name}
						removeColor={() => removeColor(color.name)}
						openEditor={openEditor}
					/>
				))}
			</div>
		);
	}
);

export default withStyles(styles, { withTheme: true })(DragableColorList);
