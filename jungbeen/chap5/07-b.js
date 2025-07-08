function isInValidMove(nx, ny) {
  //   return nx > 5 || nx < -5 || ny < -5 || ny > 5;
  return Math.floor(Math.abs(nx) / 6) | Math.floor(Math.abs(ny) / 6);
}

function updateDir(x, y, dir) {
  if (dir === "U") return [x, y + 1];
  else if (dir === "D") return [x, y - 1];
  else if (dir === "L") return [x - 1, y];
  else return [x + 1, y];
}

function solution(dirs) {
  let x = 0;
  let y = 0;
  let visited = new Set();

  for (let i of dirs) {
    const [nx, ny] = updateDir(x, y, i);
    if (isInValidMove(nx, ny)) continue;
    visited.add(`${x}${y}${nx}${ny}`);
    visited.add(`${nx}${ny}${x}${y}`);
    [x, y] = [nx, ny];
  }

  return visited.size / 2;
}

console.log(solution("LULLLLLLU"));
