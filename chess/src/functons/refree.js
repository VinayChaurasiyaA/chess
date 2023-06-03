export default class Refree {
  isValidMove(px, py, x, y, type, team) {
    console.log("checking refree" + px + py + x + y + type);
    if (type === "pawn") {
      if (team === "white") {
        if (py === 1) {
          if (px === x && (y - py === 1 || y - py === 2)) {
            console.log("valid move");
            return true;
          }
        } else {
          if (px === x && y - py === 1) {
            return true;
          }
        }
      }
    }
    return false;
  }
}
