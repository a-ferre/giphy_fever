import React, { Component } from 'react';

import Gif from "./gif";
import GifList from "./gifList";
import SearchBar from "./searchBar";

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  render() {
    const gifId = "51UpoMKVrd5GmHjavB";
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif gifId={gifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList />
        </div>
      </div>
    );
  }
}
