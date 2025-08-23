function solution(edges, start) {
  const adj = new Map();
  for (const [u, v] of edges) {
    if (!adj.has(u)) adj.set(u, []);
    adj.get(u).push(v);
  }

  const visited = new Set([start]);
  const order = [];
  const q = [start];
  let head = 0;

  while (head < q.length) {
    const cur = q[head++];
    order.push(cur);

    for (const nxt of adj.get(cur) || []) {
      if (!visited.has(nxt)) {
        visited.add(nxt);
        q.push(nxt);
      }
    }
  }
  return order;
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
      [2, 4],
      [3, 4],
      [4, 5],
      [5, 0],
    ],
    1
  )
);
