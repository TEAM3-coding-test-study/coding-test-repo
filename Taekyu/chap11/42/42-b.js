const maps = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
];

function arrayEqual(a, b) {
  if (a.length !== b.length) return false;
  return a.every((val, index) => val === b[index]);
}

function arrayIncludes(bigArr, target) {
  return bigArr.some(
    (item) => item.length === target.length && item.every((val, idx) => val === target[idx])
  );
}

function properPath(path) {
  if (
    path[0] < 1 ||
    path[1] < 1 ||
    path[0] > maps[0].length ||
    path[1] > maps.length ||
    maps[path[1] - 1][path[0] - 1] === 0
  ) {
    return false;
  } else {
    return true;
  }
}

const solution = (maps) => {
  const queue = [];
  const visited = [];
  const adjList = [];

  const dist = Array.from({ length: maps.length }, () => Array(maps[0].length).fill(0));

  const goal = [maps[0].length, maps.length];

  for (let i = 1; i <= maps.length; i++) {
    for (let j = 1; j <= maps[0].length; j++) {
      adjList.push([i, j]);
    }
  }

  queue.push([1, 1]);
  visited.push([1, 1]);
  dist[0][0] = 1;

  Outer: while (true) {
    console.log("Q", queue);
    if (queue.length === 0) break;

    const recent = queue.shift();
    const [cx, cy] = recent;

    console.log("recent:", recent);

    const ablePath = [
      [cx + 1, cy],
      [cx - 1, cy],
      [cx, cy + 1],
      [cx, cy - 1],
    ];
    console.log("ablePath:", ablePath);

    for (const item of ablePath) {
      if (!arrayIncludes(visited, item) && properPath(item)) {
        queue.push(item);
        visited.push(item);

        dist[item[1] - 1][item[0] - 1] = dist[cy - 1][cx - 1] + 1;

        console.log(dist);
        if (arrayEqual(item, goal)) {
          return dist[item[1] - 1][item[0] - 1];
        }
      }
    }
    console.log("visited:", visited);
    console.log("==================");
  }

  return -1;
};

console.log(solution(maps));
