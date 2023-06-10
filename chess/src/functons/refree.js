export default class Refree {
  isOccupied(x, y, board) {
    // console.log("checking whether the place is occupied or not..." + board);
    const piece = board.find((p) => p.x === x && p.y === y);
    if (piece) {
      return true;
    } else {
      return false;
    }
  }
  isValidMove(px, py, x, y, type, team, board) {
    if (type === "pawn") {
      const specialRow = team === "white" ? 1 : 6;
      const pawnD = team === "white" ? 1 : -1;

      if (px === x && py === specialRow && y - py === 2 * pawnD) {
        if (
          !this.isOccupied(x, y, board) &&
          !this.isOccupied(x, y - pawnD, board)
        ) {
          return true;
        }
      } else if (px === x && y - py === pawnD) {
        if (!this.isOccupied(x, y, board)) {
          return true;
        }
      }
    }
    return false;

    // console.log("checking refree" + px + py + x + y + type + board);
    // if (type === "pawn") {
    //   if (team === "white") {
    //     if (py === 1) {
    //       if (px === x && y - py === 1) {
    //         if (!this.isOccupied(x, y, board)) {
    //           // alert("valid move");
    //           return true;
    //         }
    //         // console.log("valid move");
    //         // return true;
    //       } else if (px === x && y - py === 2) {
    //         if (
    //           !this.isOccupied(x, y, board) &&
    //           !this.isOccupied(x, y - 1, board)
    //         ) {
    //           // alert("valid move");
    //           return true;
    //         }
    //       }
    //     } else {
    //       if (px === x && y - py === 1) {
    //         return true;
    //       }
    //     }
    //   } else {
    //     if (py === 6) {
    //       if (px === x && py - y === 1) {
    //         if (!this.isOccupied(x, y, board)) {
    //           return true;
    //         }
    //       } else if (px === x && py - y === 2) {
    //         if (
    //           !this.isOccupied(x, y, board) &&
    //           !this.isOccupied(x, y + 1, board)
    //         ) {
    //           return true;
    //         }
    //       }
    //     } else {
    //       if (px === x && py - y === 1) {
    //         if (!this.isOccupied(x, y, board)) {
    //           return true;
    //         }
    //       }
    //     }
    //   }
    // }
    // return false;
  }
}
