class Queue {
  items = [];
  rear = -1;
  front = 0;

  push(val) {
    this.items.push(val);
  }
  pop() {
    this.rear++;
    return this.items[this.front];
  }
  isEmpty() {
    return !(front - rear);
  }
}

function solution(info, edges) {
  var answer = 0;
  let ha = new Map();
  const q = new Queue();

  for (let e of edges) {
    if (ha.has(e[0])) {
      ha.set(e[0], [...ha.get(e[0]), e[1]]);
    } else {
      ha.set(e[0], [e[1]]);
    }
  }

  q.push([0, 1, 0]);

  while (!q.isEmpty()) {
    let [node, sh, wo] = q.pop();
    let avail = ha.get(node);
    for (let i of avail) {
      q.push(i);
    }
    q.push();
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
