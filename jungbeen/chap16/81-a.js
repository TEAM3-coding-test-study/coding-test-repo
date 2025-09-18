function solution(items, weight_limit) {
  let left = weight_limit;
  let answer = 0;

  items.sort((a, b) => b[1] / b[0] - a[1] / a[0]);

  for (let i of items) {
    if (left <= 0) break;

    if (i[0] <= left) {
      answer += i[1];
      left -= i[0];
    } else {
      answer += (i[1] * left) / i[0];
      break;
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
