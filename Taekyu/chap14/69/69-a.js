const k1 = ["left", "right", "up", "right", "right"];
const b1 = [11, 11];

const k2 = ["down", "down", "down", "down", "down"];
const b2 = [7, 9];

const move = (cmd, coordinate, limitX, limitY) => {
  switch (cmd) {
    case "left":
      if (coordinate[0] - 1 < -limitX) {
        return;
      } else {
        --coordinate[0];
      }
      break;
    case "right":
      if (coordinate[0] + 1 > limitX) {
        return;
      } else {
        ++coordinate[0];
      }
      break;
    case "up":
      if (coordinate[1] + 1 > limitY) {
        return;
      } else {
        ++coordinate[1];
      }
      break;
    case "down":
      if (coordinate[1] - 1 < -limitY) {
        return;
      } else {
        --coordinate[1];
      }
      break;
  }
};

const solution = (keyinput, board) => {
  const coordinate = [0, 0];
  const limitX = Math.floor((board[0] - 1) / 2);
  const limitY = Math.floor((board[1] - 1) / 2);

  keyinput.forEach((v) => {
    move(v, coordinate, limitX, limitY);
  });
  return coordinate;
};

console.log(solution(k2, b2));
