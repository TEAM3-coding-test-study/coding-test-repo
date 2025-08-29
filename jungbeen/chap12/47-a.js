function bt(start, included, sum, resultArr, maximum) {
  if (sum === 10) {
    resultArr.push(included);
    return;
  }

  for (let i = start; i <= maximum; i++) {
    if (sum + i <= 10) {
      bt(i + 1, included.concat(i), sum + i, resultArr, maximum);
    }
  }
}

function solution(N) {
  const rs = [];
  bt(1, [], 0, rs, N);
  return rs;
}

console.log(solution(7));
