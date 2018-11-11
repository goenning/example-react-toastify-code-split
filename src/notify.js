
import React from 'react';
import ReactDOM from 'react-dom';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let hasContainer = false;

export function notify(text) {
  if (!hasContainer) {
    hasContainer = true;
    ReactDOM.render(<ToastContainer />, document.getElementById('root-toastify'));
  }
  toast(text);
}
