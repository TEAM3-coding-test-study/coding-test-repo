function solution(arr, n) {
  const len = arr.length;
  const answer = Array.from({ length: len }, () => Array(len).fill(0));
  const total = n;

  while (n--) {
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        if ((total - n) % 2) answer[i][j] = arr[len - 1 - j][i];
        else arr[i][j] = answer[len - 1 - j][i];
      }
    }
  }
  return total % 2 ? answer : arr;
}

console.log(
  solution(
    [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ],
    1
  )
);

console.log(
  solution(
    [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ],
    2
  )
);
