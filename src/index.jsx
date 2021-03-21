import '../assets/stylesheets/application.scss';

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";

const root = document.querySelector("#root");
ReactDOM.render(<App />, root);

// const Hello = (props) => {
//   const { name } = props;
//   return <h2>Hello yelloooo {name}</h2>;
// };

// eslint-disable-next-line react/prefer-stateless-function
// class Hello extends React.Component {
//   render() {
//     const { name } = this.props;
//     return (
//       <h2>Hello yelloooo {name}</h2>
//       );
//   }
// }



