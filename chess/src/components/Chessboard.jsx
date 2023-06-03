import React, { useRef, useState } from "react";
import Refree from "../functons/refree";

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
const refree = new Refree();

const Piece = [];
for (let i = 0; i < 8; i++) {
  Piece.push({ x: i, y: 6, image: img2, pieceType: "pawn" });
}
for (let i = 0; i < 8; i++) {
  Piece.push({ x: i, y: 1, image: img1, pieceType: "pawn" });
}
// black pieces
Piece.push({ x: 0, y: 7, image: img12, pieceType: "rook" }); // rook
Piece.push({ x: 7, y: 7, image: img12, pieceType: "rook" });
Piece.push({ x: 1, y: 7, image: img8, pieceType: "knight" });
Piece.push({ x: 6, y: 7, image: img8, pieceType: "knight" });
Piece.push({ x: 2, y: 7, image: img10, pieceType: "bishop" });
Piece.push({ x: 5, y: 7, image: img10, pieceType: "bishop" });
Piece.push({ x: 3, y: 7, image: img6, pieceType: "queen" });
Piece.push({ x: 4, y: 7, image: img4, pieceType: "king" });
// white pices
Piece.push({ x: 0, y: 0, image: img11, pieceType: "rook" });
Piece.push({ x: 7, y: 0, image: img11, pieceType: "rook" });
Piece.push({ x: 1, y: 0, image: img7, pieceType: "knight" });
Piece.push({ x: 6, y: 0, image: img7, pieceType: "knight" });
Piece.push({ x: 2, y: 0, image: img9, pieceType: "bishop" });
Piece.push({ x: 5, y: 0, image: img9, pieceType: "bishop" });
Piece.push({ x: 3, y: 0, image: img5, pieceType: "queen" });
Piece.push({ x: 4, y: 0, image: img3, pieceType: "king" });

const Chessboard = () => {
  const [peices, setPeices] = useState(Piece);
  const [activePiece, setActivePiece] = useState(null);
  // made the change here
  // let activePiece = null;

  const [gridX, setGridX] = useState(0);
  const [gridY, setGridY] = useState(0);

  const chessboardRef = useRef(null);
  const grabPiece = (e) => {
    const chessboard = chessboardRef.current;
    // console.log(e.target);
    if (e.target.classList.contains("chess-pieces")) {
      console.log("grabbed");
      e.target.style.position = "absolute";
      setGridX(Math.floor((e.clientX - chessboard.offsetLeft) / 75));
      setGridY(
        Math.abs(Math.ceil((e.clientY - chessboard.offsetTop - 600) / 75))
      );
      const x = e.clientX - 50;
      const y = e.clientY - 50;

      e.target.style.left = `${x}px`;
      e.target.style.top = `${y}px`;
      setActivePiece(e.target);
      // activePiece = e.target;
    }
  };

  const mouseMove = (e) => {
    const chessboard = chessboardRef.current;
    if (activePiece && chessboard) {
      const minX = chessboard.offsetLeft - 25;
      const minY = chessboard.offsetTop - 25;

      const maxX = chessboard.offsetLeft + chessboard.clientWidth - 75;
      const maxY = chessboard.offsetTop + chessboard.clientHeight - 75;

      const x = e.clientX - 50;
      const y = e.clientY - 50;
      activePiece.style.position = "absolute";

      //If x is smaller than minimum amount
      if (x < minX) {
        activePiece.style.left = `${minX}px`;
      }
      //If x is bigger than maximum amount
      else if (x > maxX) {
        activePiece.style.left = `${maxX}px`;
      }
      //If x is in the constraints
      else {
        activePiece.style.left = `${x}px`;
      }

      //If y is smaller than minimum amount
      if (y < minY) {
        activePiece.style.top = `${minY}px`;
      }
      //If y is bigger than maximum amount
      else if (y > maxY) {
        activePiece.style.top = `${maxY}px`;
      }
      //If y is in the constraints
      else {
        activePiece.style.top = `${y}px`;
      }
    }
  };

  const dropPiece = (e) => {
    const chessboard = chessboardRef.current;
    // console.log(e);
    //  check the refree
    if (activePiece && chessboard) {
      const x = Math.floor((e.clientX - chessboard.offsetLeft) / 75);
      const y = Math.abs(
        Math.ceil((e.clientY - chessboard.offsetTop - 600) / 75)
      );
      console.log(x, y);
      setPeices((piece) => {
        const peices = piece.map((p) => {
          if (p.x === gridX && p.y === gridY) {
            console.log(p);
            refree.isValidMove(gridX, gridY, x, y, p.pieceType);

            p.x = x;
            p.y = y;
          }
          return p;
        });
        return peices;
      });

      // console.log(e.target);
      setActivePiece(null);
      // activePiece = null;
    }
  };
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
      ref={chessboardRef}
    >
      {board}
    </div>
  );
};

export default Chessboard;
