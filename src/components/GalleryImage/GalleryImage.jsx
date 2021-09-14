import { Component } from "react";

import css from "./GalleryImage.module.css";

export default class GalleryImage extends Component {
  render() {
    return <ul className={css.gallery_list}>{this.props.children}</ul>;
  }
}
