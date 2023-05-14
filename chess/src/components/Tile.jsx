import React from "react";

import "../styles/tile.css";
// pawns

const Tile = ({ image, tile }) => {
  if (tile % 2 === 0) {
    return (
      <div className="tile black-tile">
        <img src={image} alt="" />
      </div>
    );
  } else {
    return (
      <div className="tile white-tile">
        <img src={image} alt="" />
      </div>
    );
  }
};

export default Tile;
