function solution(arr, n) {
  let result = arr.map((row) => [...row]);
  let len = arr.length;

  function rotate90(arr) {
    arr = result.map((row) => [...row]);
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        result[i][j] = arr[len - j - 1][i];
      }
    }

    return result;
  }

  for (let i = 0; i < n; i++) {
    result = rotate90(arr);
  }

  return result;
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
