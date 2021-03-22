import React, { Component } from 'react';

import Gif from "./gif";
import GifList from "./gifList";
import SearchBar from "./searchBar";

const giphy = require('giphy-api')({
  apiKey: 'SOnHECqPnK3OdmB37P9QL5S2IrnhwS9E',
  https: true
});

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifId: "51UpoMKVrd5GmHjavB",
      gifIds: ["cRLIZZKsGF9EMeOxOd", "3o7aCRfrlJ3nXk3F9C", "SbyPZRpMjRR3G"]
    };
  }

  changeSelectedGif = (newGifId) => {
    this.setState({
      gifId: newGifId
    });
  }

  changeGifList = (keyword) => {
    giphy.search({
      q: keyword,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      this.setState({
        gifIds: res.data.map((gif) => gif.id)
      });
    });
  }

  render() {
    const { gifId, gifIds } = this.state;
    return (
      <div>
        <div className="left-scene">
          <SearchBar changeGifList={this.changeGifList} />
          <div className="selected-gif">
            <Gif gifId={gifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifIds={gifIds} changeSelectedGif={this.changeSelectedGif} />
        </div>
      </div>
    );
  }
}
