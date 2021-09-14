import React, { Component } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LoaderGalery from "../components/Loader/LoaderGalery";
import Searchbar from "../components/Searchbar/Searchbar";
import galleryApi from "../services/gallery-api";
import Button from "../components/Button/Button";
import Modal from "../components/Modal/Modal";
import GalleryImage from "../components/GalleryImage/GalleryImage";
import ImageGalleryItem from "../components/ImageGalleryItem/ImageGalleryItem";

import css from "./GalleryView.module.css";

class GalleryView extends Component {
  state = {
    gallery: [],
    currentPage: 1,
    searchQuery: "",
    isLoading: false,
    error: null,
    showModal: false,
    imgModal: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      if (this.state.searchQuery === "") {
        return toast.error("Search must not be empty!");
      }
      this.fetchGallery();
    }
    if (
      prevState.searchQuery === this.state.searchQuery &&
      this.state.searchQuery === ""
    ) {
      toast.error("Search must not be empty!");
    }
  }

  onChangeQuery = (query) => {
    this.setState({
      searchQuery: query.trim(),
      currentPage: 1,
      gallery: [],
      error: null,
    });
  };

  fetchGallery = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { searchQuery, currentPage };

    this.setState({ isLoading: true });

    galleryApi
      .fetchGallery(options)
      .then((gallery) => {
        if (!gallery.hits.length) {
          return toast.error(
            `The given request ${searchQuery} is not available!!!`
          );
        }
        this.setState((prevState) => ({
          gallery: [...prevState.gallery, ...gallery.hits],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch((error) => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false });
        this.showScroll(currentPage);
      });
  };

  showScroll = (currentPage) => {
    if (currentPage > 1) {
      const cardHeight = document
        .querySelector("ul")
        .firstElementChild.getBoundingClientRect().height;
      const yOffset = window.pageYOffset; // текущее положение скролбара
      window.scrollTo({
        top: yOffset + cardHeight * 2,
        behavior: "smooth",
      });
    }
  };

  toggleModal = (img) => {
    const imgModal = img
      ? { imgUrl: img.largeImageURL, imgAlt: img.tags }
      : null;
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      imgModal: imgModal,
    }));
  };

  render() {
    const { gallery, isLoading, showModal, imgModal } = this.state;
    const shouldRenderLoadMoreButton = gallery.length > 11 && !isLoading;
    return (
      <div className={css.container}>
        <Searchbar onSubmit={this.onChangeQuery} />

        <GalleryImage>
          <ImageGalleryItem gallery={gallery} onClick={this.toggleModal} />
        </GalleryImage>

        {showModal && <Modal onClose={this.toggleModal} imgModal={imgModal} />}

        {isLoading && <LoaderGalery />}

        {shouldRenderLoadMoreButton && (
          <Button
            type="button"
            onClick={this.fetchGallery}
            text="Load more"
            className="load_more"
            isLoading={!isLoading}
          />
        )}
      </div>
    );
  }
}

export default GalleryView;
