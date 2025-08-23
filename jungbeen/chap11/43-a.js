// 실패

function solution(n, computers) {
  var answer = 0;
  const cnt = [...Array(n)].map((_, i) => i);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (computers[i][j] === 1) {
        console.log(i, j);
        let cur = i;
        while (cnt[cur] !== cur) {
          cur = cnt[cur];
        }
        cnt[j] = cur;
      }
    }
  }
  console.log(cnt);
  return new Set(cnt).size;
}

// console.log(
//   solution(3, [
//     [1, 1, 0],
//     [1, 1, 0],
//     [0, 0, 1],
//   ])
// );
// console.log(
//   solution(3, [
//     [1, 1, 0],
//     [1, 1, 1],
//     [0, 1, 1],
//   ])
// );
console.log(
  solution(5, [
    [1, 1, 0, 1, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 0, 1, 1],
    [0, 0, 1, 1, 1],
  ])
);
