function solution(matrix1, matrix2) {
  let temp = 0;
  let answer = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 3; k++) {
        temp += matrix1[i][k] * matrix2[k][j];
      }
      answer[j][i] = temp; // 전치 행렬이므로 열과 행 바꿈
      temp = 0;
    }
  }
  return answer;
}

console.log(
  solution(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    [
      [9, 8, 7],
      [6, 5, 4],
      [3, 2, 1],
    ]
  )
);
console.log(
  solution(
    [
      [2, 4, 6],
      [1, 3, 5],
      [7, 8, 9],
    ],
    [
      [9, 1, 2],
      [4, 5, 6],
      [7, 3, 8],
    ]
  )
);
