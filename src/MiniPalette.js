import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import styles from "./styles/MiniPaletteStyles";

class MiniPalette extends PureComponent {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  handleDelete(e) {
    e.stopPropagation();
    this.props.openDialog(this.props.id);
  }
  handleEdit(e) {
    e.stopPropagation();
    this.props.history.push(`/palette/edit/${this.props.id}`);
  }
  handleClick() {
    this.props.handleClick(this.props.id);
  }
  render() {
    const {
      classes,
      paletteName,
      creator,
      likes,
      colors,
      isLiked,
    } = this.props;
    const colorsList = colors.map((color) => (
      <div
        className={classes.miniColorBox}
        style={{ background: color.color }}
        key={color.name}
      />
    ));
    return (
      <div className={classes.root} onClick={this.handleClick}>
        <div className={classes.iconContainer}>
          <EditIcon className={classes.editIcon} onClick={this.handleEdit} />
          <DeleteIcon
            className={classes.deleteIcon}
            onClick={this.handleDelete}
          />
        </div>
        <div className={classes.colors}>{colorsList}</div>
        <div className={classes.metaInfoContainer}>
          <div className={classes.metaInfo}>
            <span className={classes.title}>{paletteName}</span>
            <span className={classes.creator}>by {creator.split("@")[0]}</span>
          </div>
          <div className={classes.likesInfo}>
            {isLiked ? (
              <FavoriteIcon color="secondary" className={classes.likeBtn} />
            ) : (
              <FavoriteBorderIcon className={classes.likeBtn} />
            )}
            <span className={classes.likeCount}>{likes}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(MiniPalette);
