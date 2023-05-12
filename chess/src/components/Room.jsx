import React, { useState } from "react";

import "../styles/room.css";
function Room() {
  const [boardState, setBoardState] = useState([
    ["R", "N", "B", "Q", "K", "B", "N", "R"],
    ["P", "P", "P", "P", "P", "P", "P", "P"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["p", "p", "p", "p", "p", "p", "p", "p"],
    ["r", "n", "b", "q", "k", "b", "n", "r"],
  ]);

  function handleClick(row, col) {
    // handle piece movement logic here
    console.log(`Square clicked: (${row}, ${col})`);
  }

  const renderSquare = (row, col) => {
    const isDarkSquare = (row + col) % 2 === 1;
    const piece = boardState[row][col];
    const classNames = `square ${isDarkSquare ? "dark" : "light"}`;

    return (
      <div key={`${row}${col}`} className={classNames} onClick={() => handleClick(row, col)}>
        {piece}
      </div>
    );
  };

  const renderRow = (row) => {
    const rowSquares = [];
    for (let col = 0; col < 8; col++) {
      rowSquares.push(renderSquare(row, col));
    }
    return <div key={row}>{rowSquares}</div>;
  };

  const rows = [];
  for (let row = 0; row < 8; row++) {
    rows.push(renderRow(row));
  }

  return <div className="board">{rows}</div>;
}

export default Room;
