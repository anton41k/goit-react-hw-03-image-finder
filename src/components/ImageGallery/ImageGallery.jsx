import { Component } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { toast } from "react-toastify";

import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import Button from "../Button/Button";

import css from "./ImageGallery.module.css";

export default class ImageGallery extends Component {
  state = {
    gallery: [],
    url: "https://pixabay.com/api/",
    key: "22580473-9722fdac11ed5197610aea928",
    page: 1,
    perPage: 12,
    options: "image_type=photo&orientation=horizontal",
    status: "idle",
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const search = this.props.search;
    if (prevProps.search !== search) {
      const { url, page, key, perPage, options } = this.state;
      const BASE_URL = `${url}?q=${search.trim()}&page=${page}&key=${key}&${options}&per_page=${perPage}`;

      this.setState({ status: "pending" });
      this.setState({ gallery: [], error: null, status: "pending" });

      fetch(BASE_URL)
        .then((res) => res.json())
        .then((data) => {
          console.log(!data.hits.length);
          if (!data.hits.length) {
            return Promise.reject(
              new Error(`The given request ${search} is not available!!!`)
            );
          }
          this.setState({
            gallery: data.hits,
            status: "resoved",
          });
        })
        .catch((error) =>
          this.setState({
            error,
            status: "rejected",
          })
        )
        .finally(() => {});
    }
  }

  hendelNextPage = (page) => {
    this.setState({ page });
  };

  render() {
    const { gallery, status, page, error } = this.state;
    const len = gallery.length ? true : false; //ha-ha
    //console.log(status, error);
    if (status === "idle") {
      return <div></div>;
    }
    if (status === "pending") {
      return <Loader type="Watch" color="#00BFFF" height={100} width={100} />;
    }
    //if (error) {
    //return toast.error(error.message);
    //}
    // if (status === "resoved") {
    console.log(gallery, error);
    return (
      <div>
        <ul className={css.gallery_list}>
          {len &&
            gallery.map((el) => <ImageGalleryItem elem={el} key={el.id} />)}
        </ul>
        {!len && toast.error(error.message)}
        {status === "resoved" && (
          <Button page={page} onClick={this.hendelNextPage} />
        )}
      </div>
    );
    //}
  }
}

//{len && <button type="button" onClick={this.hendelNextPage}>Load more</button>}
