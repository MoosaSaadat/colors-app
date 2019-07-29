import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { SortableElement } from "react-sortable-hoc";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import clsx from "clsx";
import styles from "./styles/DragableColorBoxStyles";

const DragableColorBox = SortableElement((props) => {
	function handleEditColor () {
		props.openEditor(props.name, props.bgColor);
	}
	return (
		<div className={props.classes.root}>
			<div className={clsx(props.classes.info, "colorsHideHelper")}>
				<span>{props.name}</span>
				<div className={props.classes.iconContainer}>
					<EditIcon
						className={clsx(props.classes.editIcon, "colorsHideHelper")}
						onClick={handleEditColor}
					/>
					<DeleteIcon
						className={props.classes.deleteIcon}
						onClick={props.removeColor}
					/>
				</div>
			</div>
		</div>
	);
});

export default withStyles(styles)(DragableColorBox);
