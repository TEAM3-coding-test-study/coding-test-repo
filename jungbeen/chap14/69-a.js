function solution(keyinput, board) {
  const limitx = (board[0] - 1) / 2;
  const limity = (board[1] - 1) / 2;
  let x = 0;
  let y = 0;

  for (let direc of keyinput) {
    if (direc === "left") {
      if (x === -limitx) continue;
      x--;
    } else if (direc === "right") {
      if (x === limitx) continue;
      x++;
    } else if (direc === "up") {
      if (y === limity) continue;
      y++;
    } else if (direc === "down") {
      if (y === -limity) continue;
      y--;
    }
  }

  return [x, y];
}
console.log(solution(["left", "right", "up", "right", "right"], [11, 11]));
