
import React from 'react';
import ReactDOM from 'react-dom';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let hasContainer = false;

export default function(text, options) {
  if (!hasContainer) {
    hasContainer = true;
    ReactDOM.render(<ToastContainer />, document.getElementById('root-toastify'));
  }
  toast(text, options);
}
