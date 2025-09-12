function solution(arr) {
  const cache = Array.from({ length: 4 }, () => Array(arr[0].length).fill(0));
  for (let i = 0; i < 3; i++) {
    cache[i][0] = arr[i][0];
  }
  cache[3][0] = arr[0][0] + arr[2][0];

  for (let i = 1; i < arr[0].length; i++) {
    cache[0][i] = arr[0][i] + Math.max(cache[1][i - 1], cache[2][i - 1]);
    cache[1][i] =
      arr[1][i] + Math.max(cache[0][i - 1], cache[2][i - 1], cache[3][i - 1]);
    cache[2][i] = arr[2][i] + Math.max(cache[0][i - 1], cache[1][i - 1]);
    cache[3][i] = arr[0][i] + arr[2][i] + cache[1][i - 1];
  }

  return Math.max(
    cache[0][cache[0].length - 1],
    cache[1][cache[0].length - 1],
    cache[2][cache[0].length - 1],
    cache[3][cache[0].length - 1]
  );
}

console.log(
  solution([
    [1, 3, 3, 2],
    [2, 1, 4, 1],
    [1, 5, 2, 3],
  ])
);
console.log(
  solution([
    [1, 7, 13, 2, 6],
    [2, -4, 2, 5, 4],
    [5, 3, 5, -3, 1],
  ])
);
