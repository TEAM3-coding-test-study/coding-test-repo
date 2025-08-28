function solution(n, info) {
  let bestDiff = -1;
  let best = null;

  function dfs(i, remain, cur) {
    if (i === 10) {
      cur[10] = remain;
      evaluate(cur);
      cur[10] = 0;
      return;
    }

    const needToWin = info[i] + 1;

    if (remain >= needToWin) {
      cur[i] = needToWin;
      dfs(i + 1, remain - needToWin, cur);
      cur[i] = 0;
    }

    dfs(i + 1, remain, cur);
  }

  function evaluate(cur) {
    let ryan = 0,
      apeach = 0;
    for (let i = 0; i <= 10; i++) {
      const score = 10 - i;
      const a = info[i],
        b = cur[i];
      if (a === 0 && b === 0) continue;
      if (b > a) ryan += score;
      else apeach += score;
    }
    const diff = ryan - apeach;
    if (diff <= 0) return;

    if (diff > bestDiff) {
      bestDiff = diff;
      best = cur.slice();
    } else if (diff === bestDiff) {
      if (betterLow(cur, best)) best = cur.slice();
    }
  }

  function betterLow(lhs, rhs) {
    for (let i = 10; i >= 0; i--) {
      if (lhs[i] !== rhs[i]) return lhs[i] > rhs[i];
    }
    return false;
  }

  dfs(0, n, Array(11).fill(0));
  return best ? best : [-1];
}
