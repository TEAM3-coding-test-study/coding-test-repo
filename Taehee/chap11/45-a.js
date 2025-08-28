function solution(board) {
  const n = board.length;
  if (n === 1) return 0;

  const dr = [-1, 0, 1, 0];
  const dc = [0, 1, 0, -1];

  const INF = 1e9;
  const cost = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => Array(4).fill(INF))
  );

  const inRange = (r, c) => r >= 0 && r < n && c >= 0 && c < n;

  const q = [];

  for (let d = 0; d < 4; d++) {
    const nr = 0 + dr[d],
      nc = 0 + dc[d];
    if (!inRange(nr, nc) || board[nr][nc] === 1) continue;
    cost[nr][nc][d] = 100;
    q.push([nr, nc, d, 100]);
  }

  while (q.length) {
    const [r, c, dir, cur] = q.shift();

    if (cur > cost[r][c][dir]) continue;

    for (let nd = 0; nd < 4; nd++) {
      const nr = r + dr[nd],
        nc = c + dc[nd];
      if (!inRange(nr, nc) || board[nr][nc] === 1) continue;

      const add = dir === nd ? 100 : 600;
      const nxt = cur + add;

      if (nxt < cost[nr][nc][nd]) {
        cost[nr][nc][nd] = nxt;
        q.push([nr, nc, nd, nxt]);
      }
    }
  }

  return Math.min(...cost[n - 1][n - 1], INF) === INF
    ? 0
    : Math.min(...cost[n - 1][n - 1]);
}
