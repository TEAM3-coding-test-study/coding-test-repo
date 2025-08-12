const graph = [
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
];
const start = 1;

const solution = (graph, start) => {
  const queue = [];
  const visited = [];
  const adjList = {};

  // 그래프를 인접 리스트로 변환
  graph.forEach(([u, v]) => {
    if (!adjList[u]) adjList[u] = [];
    adjList[u].push(v);
  });

  console.log(adjList);

  queue.push(start);
  visited.push(start);

  while (true) {
    console.log(queue);
    if (queue.length === 0) break;

    const recent = queue.shift();
    adjList[recent]?.forEach((item, _) => {
      if (!visited.includes(item)) {
        queue.push(item);
        visited.push(item);
      }
    });
  }

  return visited;
};

console.log(solution(graph, start));
