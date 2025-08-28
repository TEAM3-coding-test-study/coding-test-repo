function solution(n) {
  let count = 0;
  const FULL = (1 << n) - 1;

  function dfs(cols, diag1, diag2) {
    if (cols === FULL) {
      count++;
      return;
    }

    let avail = ~(cols | diag1 | diag2) & FULL;

    while (avail) {
      const pick = avail & -avail;
      avail -= pick;
      dfs(cols | pick, ((diag1 | pick) << 1) & FULL, (diag2 | pick) >>> 1);
    }
  }

  dfs(0, 0, 0);
  return count;
}
