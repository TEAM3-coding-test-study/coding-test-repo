class Queue {
  rear = -1;
  front = -1;
  items = [];

  push(val) {
    this.rear++;
    this.items.push(val);
  }
  pop() {
    this.front++;
    return this.items[this.front];
  }
  isEmpty() {
    return this.rear - this.front === 0;
  }
  clear() {
    this.front = -1;
    this.rear = -1;
  }
}

function solution(maps) {
  var answer = 0;
  const xlen = maps[0].length;
  const ylen = maps.length;
  const visited = new Set();
  const q = new Queue();
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  visited.add(0);
  q.push([0, 0, 1]);

  while (!q.isEmpty()) {
    //   for (let z = 0; z < 5; z++) {
    const [x, y, cnt] = q.pop();
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx === xlen - 1 && ny === ylen - 1) {
        q.clear();
        answer = cnt + 1;
        break;
      }
      if (visited.has(xlen * ny + nx)) continue;

      if (nx >= 0 && nx < xlen && ny >= 0 && ny < ylen && maps[ny][nx] === 1) {
        visited.add(xlen * ny + nx);
        q.push([nx, ny, cnt + 1]);
      }
    }
  }

  if (answer === 0) answer = -1;

  return answer;
}

// console.log(
//   solution([
//     [1, 0, 1, 1, 1],
//     [1, 0, 1, 0, 1],
//     [1, 0, 1, 1, 1],
//     [1, 1, 1, 0, 1],
//     [0, 0, 0, 0, 1],
//   ])
// );
// console.log(
//   solution([
//     [1, 0, 1, 1, 1],
//     [1, 0, 1, 0, 1],
//     [1, 0, 1, 1, 1],
//     [1, 1, 1, 0, 0],
//     [0, 0, 0, 0, 1],
//   ])
// );
console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 1, 1, 0, 1],
  ])
);
