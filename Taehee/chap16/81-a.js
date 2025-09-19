function solution(items, weight_limit) {
  const m = items.length;
  let answer = 0;
  const value = new Array(m).fill(0);
  for (let i = 0; i < m; i++) {
    value[i] = items[i][1] / items[i][0];
  }
  items.sort((a, b) => {
    return b[1] / b[0] - a[1] / a[0];
  });

  for (const [w, v] of items) {
    if (weight_limit === 0) break;

    if (w <= weight_limit) {
      answer += v;
      weight_limit -= w;
    } else {
      answer += v * (weight_limit / w);
      weight_limit = 0;
    }
  }

  return answer;
}

console.log(
  solution(
    [
      [10, 19],
      [7, 10],
      [6, 10],
    ],
    15
  )
);
console.log(
  solution(
    [
      [10, 60],
      [20, 100],
      [30, 120],
    ],
    50
  )
);
