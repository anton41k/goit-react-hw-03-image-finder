import { Component } from "react";

import css from "./ImageGalleryItem.module.css";

export default class ImageGallery extends Component {
  render() {
    const gallery = this.props.gallery;
    const onClick = this.props.onClick ? this.props.onClick : null;
    return (
      <>
        {gallery.map((el) => (
          <li
            key={`${el.id}${el.webformatURL}`}
            onClick={() => this.props.onClick(el)}
            className={css.photo_card}
          >
            <img
              src={el.webformatURL}
              alt={el.tags}
              className={css.photo_img}
            />
          </li>
        ))}
      </>
    );
  }
}
