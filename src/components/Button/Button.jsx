import React, { Component } from "react";
import { ImSearch } from "react-icons/im";
import { IconContext } from "react-icons";

import css from "./Button.module.css";

export default class Button extends Component {
  render() {
    const { type, text, className } = this.props;
    let onClick = this.props.onClick ? this.props.onClick : null;

    return (
      <button type={type} className={css[className]} onClick={onClick}>
        {text ? (
          text
        ) : (
          <IconContext.Provider value={{ size: "1.4em", color: "gray" }}>
            <ImSearch />
          </IconContext.Provider>
        )}
      </button>
    );
  }
}
