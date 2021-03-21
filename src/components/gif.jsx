import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class Gif extends Component {
  render() {
    const { gifId } = this.props;
    const url = `https://media3.giphy.com/media/${gifId}/giphy.gif`;
    return (
      <img src={url} alt="gif" className="gif" />
    );
  }
}