function solution(N, stages) {
  var answer = [];
  var fail = [];
  let s = [...stages];

  for (let i = 1; i < N + 1; i++) {
    let here = 0;
    let go = 0;
    for (let j of s) {
      if (j == i) here++;
      if (j >= i) go++;
    }
    if (go === 0) {
      fail.push(0);
      continue;
    }
    fail.push(here / go);
    s = s.filter((x) => x > i);
  }

  var temp = [...new Set(fail)].sort((a, b) => b - a);
  console.log(fail);
  for (let i of temp) {
    fail.forEach((j, idx) => {
      if (i === j) {
        answer.push(idx + 1);
      }
    });
  }

  return answer;
}

const N = 4;
const stages = [1, 2, 1, 1, 1];

console.log(solution(N, stages));

// O(N^2)이상 시간복잡도 초과
