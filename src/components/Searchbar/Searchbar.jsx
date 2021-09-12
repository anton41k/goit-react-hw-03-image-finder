import { Component } from "react";
import { ImSearch } from "react-icons/im";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import css from "./Searchbar.module.css";

export default class Searchbar extends Component {
  state = {
    search: "",
  };

  handleSearchChange = (ev) => {
    this.setState({
      search: ev.currentTarget.value.toLowerCase(),
    });
  };

  handleSubmit = (ev) => {
    ev.preventDefault();

    const { search } = this.state;
    if (search.trim() === "") {
      this.setState({ search: "" });
      return toast.error("Search must not be empty!");
    }
    this.props.onSubmit(this.state.search);
    this.setState({ search: "" });
  };

  render() {
    const { search } = this.state;
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <input
          className={css.form_input}
          type="text"
          name="search"
          required
          onChange={this.handleSearchChange}
          value={search}
        />

        <button className={css.form_submit} type="submit">
          <ImSearch />
        </button>
      </form>
    );
  }
}
