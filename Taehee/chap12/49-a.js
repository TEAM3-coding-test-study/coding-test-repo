function solution(k, dungeons) {
  const n = dungeons.length;
  const visited = Array(n).fill(false);
  let best = 0;

  function dfs(stamina, cleared) {
    best = Math.max(best, cleared);

    for (let i = 0; i < n; i++) {
      if (visited[i]) continue;
      const [need, cost] = dungeons[i];
      if (stamina >= need) {
        visited[i] = true;
        dfs(stamina - cost, cleared + 1);
        visited[i] = false;
      }
    }
  }

  dfs(k, 0);
  return best;
}
