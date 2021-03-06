import React, { Component } from 'react';

import Gif from "./gif";

// eslint-disable-next-line react/prefer-stateless-function
export default class GifList extends Component {
  render() {
    const { gifIds, changeSelectedGif } = this.props;
    return (
      <div className="gif-list">
        { gifIds.map((gifId) => <Gif gifId={gifId} key={gifId} changeSelectedGif={changeSelectedGif} />)}
      </div>
    );
  }
}
