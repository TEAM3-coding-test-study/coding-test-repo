function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;
  const maze = maps.map((row) => row.split(""));

  let start, lever, end;

  // S, L, E 위치 찾기
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (maze[i][j] === "S") start = [i, j];
      if (maze[i][j] === "L") lever = [i, j];
      if (maze[i][j] === "E") end = [i, j];
    }
  }

  // BFS 함수
  function bfs(start, target) {
    const visited = Array.from({ length: n }, () => Array(m).fill(false));
    const queue = [[...start, 0]];
    visited[start[0]][start[1]] = true;

    const dx = [0, 0, -1, 1];
    const dy = [1, -1, 0, 0];

    while (queue.length > 0) {
      const [x, y, dist] = queue.shift();

      if (x === target[0] && y === target[1]) return dist;

      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (
          nx >= 0 &&
          nx < n &&
          ny >= 0 &&
          ny < m &&
          !visited[nx][ny] &&
          maze[nx][ny] !== "X"
        ) {
          visited[nx][ny] = true;
          queue.push([nx, ny, dist + 1]);
        }
      }
    }

    return -1; // 도달 불가능
  }

  const toLever = bfs(start, lever);
  const toEnd = bfs(lever, end);

  if (toLever === -1 || toEnd === -1) return -1;
  return toLever + toEnd;
}
