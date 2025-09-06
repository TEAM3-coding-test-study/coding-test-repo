const arr1 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

const rotateArr = (arr, newArr, rotateNum) => {
  const N = arr.length;
  switch (rotateNum) {
    case 0:
      newArr = arr;
      break;
    case 1:
      for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
          //   console.log(i, j);
          newArr[i][N - 1 - j] = arr[j][i];
          //   console.log(newArr);
        }
      }
      break;
    case 2:
      for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
          newArr[N - 1 - j][N - 1 - i] = arr[j][i];
        }
      }
      break;
    case 3:
      for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
          //   console.log(i, j);

          newArr[N - 1 - i][j] = arr[j][i];
          //   console.log(newArr);
        }
      }
      break;
  }
};

const solution = (arr, n) => {
  const rotateNum = n % 4;
  const newArr = Array.from({ length: arr.length }, (v, k) => {
    return Array(arr.length);
  });

  rotateArr(arr, newArr, rotateNum);
  return newArr;
};

console.log(solution(arr1, 1));
