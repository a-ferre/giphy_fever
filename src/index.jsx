import '../assets/stylesheets/application.scss';

import React from "react";
import ReactDOM from "react-dom";

const Hello = () => {
  return <h2>Hello yelloooo</h2>
}

const root = document.querySelector("#root");
ReactDOM.render(<Hello />,root);

