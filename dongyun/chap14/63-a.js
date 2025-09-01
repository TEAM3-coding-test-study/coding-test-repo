
function solution(matrix1, matrix2) {
    const multiplyMatrices = (matrix1, matrix2) => {
        const m = matrix1[0].length;
        const n = matrix2.length;

        const arr = [...new Array(m)].map((_)=> new Array(n).fill(0));
        console.log(m, n);
        for(let i = 0; i < m; i++){
            for(let j = 0; j < n; j++){
                for(let k = 0; k < n; k++){
                    arr[i][j] += matrix1[i][k] * matrix2[k][j];
                }
            }
        }
        return arr;
    }

    const transposeMatrices = (matrix) =>{
        const arr = structuredClone(matrix);
        const m = matrix.length;
        const n = matrix[0].length;
        for(let i = 0; i < m; i++){
            for(let j = 0; j < n; j++){
                arr[i][j] = matrix[j][i];
            }
        }

        return arr;
    }

    return(transposeMatrices(multiplyMatrices(matrix1, matrix2)))

}



console.log(
  solution(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ],
    [
      [9, 8, 7],
      [6, 5, 4],
      [3, 2, 1]
    ]
  )
);
// [
//   [30, 84, 138],
//   [24, 69, 114],
//   [18, 54, 90]
// ]
   
console.log(
  solution(
    [
      [2, 4, 6],
      [1, 3, 5],
      [7, 8, 9]
    ],
    [
      [9, 1, 2],
      [4, 5, 6],
      [7, 3, 8]
    ]
  )
);
// [
//   [76, 56, 158],
//   [40, 31, 74],
//   [76, 60, 134]
// ]