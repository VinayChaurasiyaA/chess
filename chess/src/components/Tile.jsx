import React from "react";

import "../styles/tile.css";
// pawns

const Tile = ({ image, tile }) => {
  if (tile % 2 === 0) {
    return (
      <div className="tile black-tile">
        {image && (
          <div
            className="chess-pieces"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        )}
      </div>
    );
  } else {
    return (
      <div className="tile white-tile">
        {image && (
          <div
            className="chess-pieces"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        )}
        {/* <img src={image} alt="" /> */}
      </div>
    );
  }
};

export default Tile;
