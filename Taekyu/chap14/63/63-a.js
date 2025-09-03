const matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const matrix2 = [
  [9, 8, 7],
  [6, 5, 4],
  [3, 2, 1],
];

const solution = (matrix1, matrix2) => {
  const N = matrix1.length;
  const newMatrix = Array.from({ length: N }, (v, k) => Array(N));
  const transposedMatrix = Array.from({ length: N }, (v, k) => Array(N));

  for (let j = 0; j < N; j++) {
    for (let i = 0; i < N; i++) {
      let temp = 0;
      for (let k = 0; k < N; k++) {
        // console.log(matrix1[j][k]);
        // console.log(matrix2[k][i]);
        temp += matrix1[j][k] * matrix2[k][i];
      }
      newMatrix[j][i] = temp;
    }
  }

  //   console.log(newMatrix);

  for (let j = 0; j < N; j++) {
    for (let i = 0; i < N; i++) {
      transposedMatrix[i][j] = newMatrix[j][i];
    }
  }
  return transposedMatrix;
};

console.log(solution(matrix1, matrix2));
