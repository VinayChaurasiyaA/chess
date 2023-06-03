import React from "react";
import Chessboard from "./Chessboard";

import "../styles/room.css";
import Videocallroom from "./Videocallroom";
const Room = () => {
  return (
    <div className="app">
      <div>
        <Chessboard />
      </div>
      <div className="video">
        <Videocallroom />
      </div>
    </div>
  );
};

export default Room;
