class Q {
  items = [];
  rear = -1;
  front = -1;
  push(val) {
    this.rear++;
    this.items[this.rear] = val;
  }
  pop() {
    if (this.isEmpty()) return;
    this.front++;
    return this.items[this.front];
  }
  isEmpty() {
    return !(this.front - this.rear);
  }
  clear() {
    this.rear = -1;
    this.front = -1;
  }
}

function canAddInQ(nx, ny, x, y, maps) {
  return nx >= 0 && nx < x && ny >= 0 && ny < y && maps[ny][nx] !== "X";
}

function addToQ(q, visited, x, y, k, time) {
  if (visited[x][y][k] === false) {
    q.push([x, y, k, time]);
    visited[x][y][k] = true;
  }
}

function solution(maps) {
  let answer = 0;
  const ylen = maps.length;
  const xlen = maps[0].length;
  const q = new Q();
  const visited = Array.from({ length: ylen }, () =>
    Array(xlen)
      .fill()
      .map(() => [false, false])
  );

  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[i].length; j++) {
      if (maps[i][j] === "S") {
        visited[i][j][0] = true;
        q.push([j, i, 0, 0]);
        break;
      }
    }
  }

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  while (!q.isEmpty()) {
    let [x, y, k, t] = q.pop();
    for (let i = 0; i < dx.length; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (!canAddInQ(nx, ny, xlen, ylen, maps)) continue;

      if (maps[ny][nx] === "L" && k === 0) {
        q.clear();
        answer += t + 1;
        q.push([nx, ny, 1, 0]);
        break;
      } else if (maps[ny][nx] === "E" && k === 1) {
        return (answer += t + 1);
      }
      addToQ(q, visited, nx, ny, k, t + 1);
    }
  }

  return -1;
}

console.log(solution(["SOOOL", "XXXXO", "OOOOO", "OXXXX", "OOOOE"]));
console.log(solution(["LOOXS", "OOOOX", "OOOOO", "OOOOO", "EOOOO"]));
