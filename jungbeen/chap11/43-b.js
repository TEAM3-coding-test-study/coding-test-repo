function solution(n, computers) {
  var answer = 0;
  const visited = new Set();
  const stc = [];

  for (let i = 0; i < n; i++) {
    if (visited.has(i)) continue;
    stc.push(i);
    while (stc.length > 0) {
      let cur = stc.pop();
      for (let j = 0; j < n; j++) {
        if (cur === j) continue;
        if (visited.has(j)) continue;
        if (computers[cur][j] === 1) {
          visited.add(j);
          stc.push(j);
        }
      }
    }
    answer++;
  }
  return answer;
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
