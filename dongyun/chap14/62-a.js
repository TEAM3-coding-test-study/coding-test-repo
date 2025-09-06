function solution(arr, n) {
    const N = arr.length;
    const newArr = structuredClone(arr)
    for (let k = 0; k < n; k++) {
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < N; j++) {
                newArr[i][j] = arr[(N - 1) - j][i];
            }
        }
    }
    return newArr;
}


console.log(
    solution(
        [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16]
        ],
        1
    )
)
// [
//   [13, 9, 5, 1],
//   [14, 10, 6, 2],
//   [15, 11, 7, 3],
//   [16, 12, 8, 4]
// ]

// console.log(
//     solution(
//         [
//             [1, 2, 3, 4],
//             [5, 6, 7, 8],
//             [9, 10, 11, 12],
//             [13, 14, 15, 16]
//         ],
//         2
//     )
// )
// [
//   [16, 15, 14, 13],
//   [12, 11, 10, 9],
//   [8, 7, 6, 5],
//   [4, 3, 2, 1]
// ]