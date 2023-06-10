export default class Refree {
  isOccupied(x, y, board) {
    console.log("checking whether the place is occupied or not..." + board);
    const piece = board.find((p) => p.x === x && p.y === y);
    if (piece) {
      return true;
    }
    return false;
  }
  isValidMove(px, py, x, y, type, team, board) {
    // console.log("checking refree" + px + py + x + y + type + board);
    if (type === "pawn") {
      if (team === "white") {
        if (py === 1) {
          if (px === x && (y - py === 1 || y - py === 2)) {
            if (!this.isOccupied(x, y, board)) {
              alert("valid move");
              return true;
            }
            console.log("valid move");
            return true;
          }
        } else {
          if (px === x && y - py === 1) {
            return true;
          }
        }
      } else {
        if (py === 6) {
          if (px === x && (py - y === 1 || py - y === 2)) {
            if (!this.isOccupied(x, y, board)) {
              return true;
            }
            return true;
          }
        } else {
          if (px === x && py - y === 1) {
            return true;
          }
        }
      }
    }
    return false;
  }
}
