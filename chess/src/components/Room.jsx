import React from "react";
import Chessboard from "./Chessboard";

import "../styles/room.css";
const Room = () => {
  return (
    <div className="app">
      <div>
        <Chessboard />
      </div>
      <div className="video">
        <h1>Room</h1>
      </div>
    </div>
  );
};

export default Room;
