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
}
function solution(graph, start) {
  const hash = new Map();
  const q = new Queue();
  const answer = [];
  const visited = new Set();

  for (let g of graph) {
    if (hash.has(g[0])) {
      hash.get(g[0]).push(g[1]);
    } else {
      hash.set(g[0], [g[1]]);
    }
  }
  q.push(start);

  let cur;
  while (!q.isEmpty()) {
    cur = q.pop();
    if (visited.has(cur)) continue;
    visited.add(cur);
    answer.push(cur);
    if (!hash.has(cur)) continue;
    for (let i of hash.get(cur)) {
      q.push(i);
    }
  }

  return answer;
}

console.log(
  solution(
    [
      [1, 2],
      [1, 3],
      [2, 4],
      [2, 5],
      [3, 6],
      [3, 7],
      [4, 8],
      [5, 8],
      [6, 9],
      [7, 9],
    ],
    1
  )
);
console.log(
  solution(
    [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 0],
    ],
    1
  )
);
