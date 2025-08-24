function solution(N, road, K) {
  const hash = new Map();
  const dist = Array(N).fill(-1);
  dist[0] = 0;
  let cur = 1;
  let mindist = 500000;
  const visited = new Set();

  for (let e of road) {
    let [start, end, weight] = e;
    if (hash.has(start)) {
      hash.get(start).push([end, weight]);
    } else {
      hash.set(start, [[end, weight]]);
    }
    if (hash.has(end)) {
      hash.get(end).push([start, weight]);
    } else {
      hash.set(end, [[start, weight]]);
    }
  }

  for (let r = 0; r < N - 1; r++) {
    let ent = hash.get(cur);
    visited.add(cur);
    mindist = 500000;
    for (let [e, w] of ent) {
      if (dist[e - 1] === -1 || dist[e - 1] > dist[cur - 1] + w) {
        dist[e - 1] = dist[cur - 1] + w;
      }
    }

    for (let i = 0; i < N; i++) {
      if (!visited.has(i + 1) && mindist > dist[i] && dist[i] > 0) {
        mindist = dist[i];
        cur = i + 1;
      }
    }
  }

  return dist.filter((x) => x <= K).length;
}

console.log(
  solution(
    5,
    [
      [1, 2, 1],
      [2, 3, 3],
      [5, 2, 2],
      [1, 4, 2],
      [5, 3, 1],
      [5, 4, 2],
    ],
    3
  )
);
console.log(
  solution(
    4,
    [
      [1, 2, 0],
      [1, 2, 1],
      [2, 3, 1],
      [3, 4, 1],
    ],
    2
  )
);
