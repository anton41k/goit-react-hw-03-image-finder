import { Component } from "react";

//import css from "./ImageGalleryItem.module.css";

export default class ImageGallery extends Component {
  render() {
    const { largeImageURL, webformatURL, tags } = this.props.elem;
    return (
      <li>
        <a href={largeImageURL}>
          <img src={webformatURL} alt={tags} />
        </a>
      </li>
    );
  }
}
