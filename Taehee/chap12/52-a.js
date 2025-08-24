function solution(n, weak, dist) {
  const W = weak.length;
  const extended = weak.concat(weak.map((x) => x + n));

  dist.sort((a, b) => b - a);

  function* permutations(arr, cnt) {
    const used = Array(arr.length).fill(false);
    const pick = [];
    function* dfs() {
      if (pick.length === cnt) {
        yield pick.slice();
        return;
      }
      for (let i = 0; i < arr.length; i++) {
        if (used[i]) continue;
        used[i] = true;
        pick.push(arr[i]);
        yield* dfs();
        pick.pop();
        used[i] = false;
      }
    }
    yield* dfs();
  }

  for (let cnt = 1; cnt <= dist.length; cnt++) {
    for (const order of permutations(dist, cnt)) {
      for (let start = 0; start < W; start++) {
        let idx = start;
        let friend = 0;
        let limit = extended[idx] + order[friend];

        while (idx < start + W) {
          if (extended[idx] <= limit) {
            idx++;
          } else {
            friend++;
            if (friend === cnt) break;
            limit = extended[idx] + order[friend];
          }
        }
        if (idx >= start + W) return cnt;
      }
    }
  }
  return -1;
}
