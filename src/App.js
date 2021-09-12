import { Component } from "react";
import { ToastContainer } from "react-toastify";

import ImageGallery from "./components/ImageGallery/ImageGallery";
import Searchbar from "./components/Searchbar/Searchbar";

export default class App extends Component {
  state = {
    search: "",
  };

  hendleFormSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;
    return (
      <div style={{ textAlign: "center" }}>
        <Searchbar onSubmit={this.hendleFormSearch} />
        <ImageGallery search={search} />
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
  /*state = {
        gallery: [],
        search:'love'
    }

    componentDidMount() {
        fetch(`https://pixabay.com/api/?q=${this.state.search}&page=1&key=22580473-9722fdac11ed5197610aea928&image_type=photo&orientation=horizontal&per_page=12`)
            .then(res => res.json())
            .then(data => this.setState({ gallery: data.hits }))
            .finally(() => console.log(this.state))
    }

    render() {
        const { gallery } = this.state;
        return (
            <div>
                {gallery.map(img => (
                    <img
                        key={img.id}
                        src={img.userImageURL}
                        alt={img.tags}/>
                ))}
            </div>
        )
    }*/
}
