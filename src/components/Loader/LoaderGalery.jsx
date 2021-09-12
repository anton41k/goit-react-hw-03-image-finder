import { Component } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default class LoaderGalery extends Component {
  state = {
    loading: false,
  };

  hendleIsLoading = (loading) => {
    this.setState({ loading });
  };

  render() {
    const { loading } = this.state;
    return (
      <div>
        <Loader
          type="Watch"
          color="#00BFFF"
          height={100}
          width={100}
          visible={loading}
        />
      </div>
    );
  }
}
