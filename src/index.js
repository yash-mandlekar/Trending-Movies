import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom/dist";
import App from "./App";

import "bootstrap-icons/font/bootstrap-icons.css";
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
