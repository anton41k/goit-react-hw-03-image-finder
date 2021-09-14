import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import css from "./LoaderGalery.module.css";

const LoaderGalery = () => {
  return (
    <div className={css.container_loader}>
      <Loader type="Watch" color="#00BFFF" height={100} width={100} />
    </div>
  );
};

export default LoaderGalery;
