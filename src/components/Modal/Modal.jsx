import React, { Component } from "react";
import { createPortal } from "react-dom";
import css from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    const { imgUrl, imgAlt } = this.props.imgModal;
    return createPortal(
      <div className={css.modal_backdrop} onClick={this.handleBackdropClick}>
        <div className={css.modal_content}>
          <img src={imgUrl} alt={imgAlt} className={css.modal_img} />
        </div>
      </div>,
      modalRoot
    );
  }
}
