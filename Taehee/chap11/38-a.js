function solution(edges, start) {
  const adj = new Map();
  for (const [u, v] of edges) {
    if (!adj.has(u)) adj.set(u, []);
    adj.get(u).push(v);
  }

  // DFS (반복, 스택)
  const visited = new Set();
  const order = [];
  const stack = [start];

  while (stack.length) {
    const node = stack.pop();
    if (visited.has(node)) continue;
    visited.add(node);
    order.push(node);

    // 이웃을 역순으로 넣어야 스택에서 꺼낼 때 입력 순서대로 탐색됨
    const neighbors = adj.get(node) || [];
    for (let i = neighbors.length - 1; i >= 0; i--) {
      const nxt = neighbors[i];
      if (!visited.has(nxt)) stack.push(nxt);
    }
  }
  return order;
}

console.log(
  solution(
    [
      ["A", "B"],
      ["B", "C"],
      ["C", "D"],
      ["D", "E"],
    ],
    "A"
  )
);

console.log(
  solution(
    [
      ["A", "B"],
      ["A", "C"],
      ["B", "D"],
      ["B", "E"],
      ["C", "F"],
      ["E", "F"],
    ],
    "A"
  )
);
