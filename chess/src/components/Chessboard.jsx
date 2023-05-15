import React from "react";

import "../styles/board.css";
import img1 from "../images/pawn_w.png";
import img2 from "../images/pawn_b.png";

// king
import img3 from "../images/king_w.png";
import img4 from "../images/king_b.png";

// queen
import img5 from "../images/queen_w.png";
import img6 from "../images/queen_b.png";

//knights
import img7 from "../images/knight_w.png";
import img8 from "../images/knight_b.png";

// bishops
import img9 from "../images/bishop_w.png";
import img10 from "../images/bishop_b.png";
// rooks
import img11 from "../images/rook_w.png";
import img12 from "../images/rook_b.png";
import Tile from "./Tile";
const horizontal = ["a", "b", "c", "d", "e", "f", "g", "h"];
const vertical = ["1", "2", "3", "4", "5", "6", "7", "8"];

const Piece = [];
for (let i = 0; i < 8; i++) {
  Piece.push({ x: i, y: 6, image: img2 });
}
for (let i = 0; i < 8; i++) {
  Piece.push({ x: i, y: 1, image: img1 });
}
// black pieces
Piece.push({ x: 0, y: 7, image: img12 });
Piece.push({ x: 7, y: 7, image: img12 });
Piece.push({ x: 1, y: 7, image: img8 });
Piece.push({ x: 6, y: 7, image: img8 });
Piece.push({ x: 2, y: 7, image: img10 });
Piece.push({ x: 5, y: 7, image: img10 });
Piece.push({ x: 3, y: 7, image: img6 });
Piece.push({ x: 4, y: 7, image: img4 });
// white pices
Piece.push({ x: 0, y: 0, image: img11 });
Piece.push({ x: 7, y: 0, image: img11 });
Piece.push({ x: 1, y: 0, image: img7 });
Piece.push({ x: 6, y: 0, image: img7 });
Piece.push({ x: 2, y: 0, image: img9 });
Piece.push({ x: 5, y: 0, image: img9 });
Piece.push({ x: 3, y: 0, image: img5 });
Piece.push({ x: 4, y: 0, image: img3 });

let activePiece = null;

const grabPiece = (e) => {
  // console.log(e.target);
  if (e.target.classList.contains("chess-pieces")) {
    console.log("grabbed");
    e.target.style.position = "absolute";

    const x = e.clientX - 50;
    const y = e.clientY - 50;

    e.target.style.left = `${x}px`;
    e.target.style.top = `${y}px`;
    activePiece = e.target;
  }
};

const mouseMove = (e) => {
  if (activePiece) {
    const x = e.clientX - 50;
    const y = e.clientY - 50;

    activePiece.style.position = "absolute";
    activePiece.style.left = `${x}px`;
    activePiece.style.top = `${y}px`;
    // activePiece = e.target;
  }
};

const dropPiece = (e) => {
  if (activePiece) {
    activePiece = null;
  }
};
const Chessboard = () => {
  let board = [];
  for (let j = vertical.length - 1; j >= 0; j--) {
    for (let i = 0; i < horizontal.length; i++) {
      const tiles = i + j + 2;
      let image = undefined;
      Piece.forEach((p) => {
        if (p.x === i && p.y === j) image = p.image;
      });
      board.push(<Tile key={`${i}, ${j}`} image={image} tile={tiles} />);
    }
  }
  return (
    <div
      onMouseUp={(e) => dropPiece(e)}
      onMouseMove={(e) => mouseMove(e)}
      onMouseDown={(e) => grabPiece(e)}
      id="chessboard"
    >
      {board}
    </div>
  );
};

export default Chessboard;
