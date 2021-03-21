import '../assets/stylesheets/application.scss';

import React from "react";
import ReactDOM from "react-dom";

// const Hello = (props) => {
//   const { name } = props;
//   return <h2>Hello yelloooo {name}</h2>;
// };

// eslint-disable-next-line react/prefer-stateless-function
class Hello extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <h2>Hello yelloooo {name}</h2>
      );
  }
}


const root = document.querySelector("#root");
ReactDOM.render(<Hello name="Pedrito" />, root);

