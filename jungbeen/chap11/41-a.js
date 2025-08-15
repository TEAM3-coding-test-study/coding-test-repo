function solution(graph, source) {
  const len = graph.length;
  let isChanged = false;
  const info = Array.from({ length: len }, () => [null, null]);
  info[source][0] = 0;
  let dist = [];
  let prev = [];

  for (let i = 0; i < len; i++) {
    isChanged = false;
    for (let v = 0; v < graph.length; v++) {
      for (let [d, w] of graph[v]) {
        if (info[v][0] === null) continue;
        if (info[d][0] === null || info[v][0] + w < info[d][0]) {
          info[d][0] = info[v][0] + w;
          info[d][1] = v;
          isChanged = true;
        }
      }
    }
    if (!isChanged) break;
  }

  if (isChanged) return [-1];

  dist = info.map((i) => i[0]);
  prev = info.map((i) => i[1]);
  return [dist, prev];
}

console.log(
  solution(
    [
      [
        [1, 4],
        [2, 3],
        [4, -6],
      ],
      [[3, 5]],
      [[1, 2]],
      [
        [0, 7],
        [2, 4],
      ],
      [[2, 2]],
    ],
    0
  )
);
console.log(
  solution(
    [
      [
        [1, 5],
        [2, -1],
      ],
      [[2, 2]],
      [[3, -2]],
      [
        [0, 2],
        [1, 6],
      ],
    ],
    0
  )
);
