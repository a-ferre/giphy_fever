import React, { Component } from 'react';

import Gif from "./gif";

// eslint-disable-next-line react/prefer-stateless-function
export default class GifList extends Component {
  render() {
    const gifIds = ["3o7aCRk2spQsDk3E0o", "f7FteRvcx2oj3TDkS9", "jslqD89flMlWrKUZsT"];
    return (
      <div className="gif-list">
        { gifIds.map((gifId) => <Gif gifId={gifId} key={gifId} />)}
      </div>
    );
  }
}
