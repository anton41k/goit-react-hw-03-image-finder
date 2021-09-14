import React, { Component } from "react";

import Button from "../Button/Button";

import css from "./Searchbar.module.css";

class SearchForm extends Component {
  state = { query: "" };

  handleChange = (e) => {
    this.setState({ query: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.query);
    this.setState({ query: "" });
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.search_form} onSubmit={this.handleSubmit}>
          <Button type="submit" className="search_btn" />
          <input
            className={css.search_form_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default SearchForm;
