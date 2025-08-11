class Queue {
  items = [];
  rear = -1;
  front = -1;

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

function makeTree(info, edges) {
  const tree = Array.from({ length: info.length }, () => []);
  for (let e of edges) {
    tree[e[0]].push(e[1]);
  }
  return tree;
}

function solution(info, edges) {
  const t = makeTree(info, edges);
  const q = new Queue();
  let answer = 0;
  q.push([0, 0, 1, new Set()]);
  while (!q.isEmpty()) {
    const [nodeNum, wolfCnt, lambCnt, visited] = q.pop();

    for (let i of t[nodeNum]) visited.add(i);

    for (let i of visited) {
      if (info[i]) {
        if (wolfCnt !== lambCnt - 1) {
          const newVisited = new Set(visited);
          newVisited.delete(i);
          q.push([i, wolfCnt + 1, lambCnt, newVisited]);
        }
      } else {
        const newVisited = new Set(visited);
        newVisited.delete(i);
        q.push([i, wolfCnt, lambCnt + 1, newVisited]);
      }
    }
    answer = lambCnt;
  }
  return answer;
}

console.log(
  solution(
    [0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1],
    [
      [0, 1],
      [1, 2],
      [1, 4],
      [0, 8],
      [8, 7],
      [9, 10],
      [9, 11],
      [4, 3],
      [6, 5],
      [4, 6],
      [8, 9],
    ]
  )
);
console.log(
  solution(
    [0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
    [
      [0, 1],
      [0, 2],
      [1, 3],
      [1, 4],
      [2, 5],
      [2, 6],
      [3, 7],
      [4, 8],
      [6, 9],
      [9, 10],
    ]
  )
);
