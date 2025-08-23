function dfs(now, hash, arr, visited) {
  if (visited.has(now)) return;
  visited.add(now);
  arr.push(now);
  if (!hash.has(now)) return;
  for (let i of hash.get(now)) {
    dfs(i, hash, arr, visited);
  }
}

function solution(graph, start) {
  const hash = new Map();
  const visited = new Set();
  const arr = [];
  for (let e of graph) {
    if (hash.has(e[0])) {
      hash.get(e[0]).push(e[1]);
    } else {
      hash.set(e[0], [e[1]]);
    }
  }
  dfs(start, hash, arr, visited);
  return arr;
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
