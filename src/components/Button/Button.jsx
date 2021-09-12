import { Component } from "react";

export default class LoaderGalery extends Component {
  state = {
    page: 1,
  };

  hendelNextPage = () => {
    console.log(this.props.page);
    const nextPage = this.props.page + 1;
    this.props.onClick(nextPage);
  };

  render() {
    return (
      <button type="button" onClick={this.hendelNextPage}>
        Load more
      </button>
    );
  }
}
