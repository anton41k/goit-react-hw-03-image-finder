import React from "react";

import { ToastContainer } from "react-toastify";
import GalleryView from "./view/GalleryView";

const App = () => (
  <>
    <GalleryView />
    <ToastContainer position="top-right" autoClose={3000} />
  </>
);

export default App;
