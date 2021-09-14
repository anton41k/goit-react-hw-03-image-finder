import React from "react";
//import { Switch, Route, Link } from 'react-router-dom';
//import TodosView from './views/TodosView';
import { ToastContainer } from "react-toastify";
import GalleryView from "./view/GalleryView";

const App = () => (
  <>
    <GalleryView />
    <ToastContainer position="top-right" autoClose={3000} />
  </>
);

export default App;
