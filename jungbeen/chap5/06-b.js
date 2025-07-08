function solution(N, stages) {
  var answers = [];
  var chellengers = new Array(N).fill(0);
  var total = stages.length;
  var fail = {};

  for (let i of stages) {
    chellengers[i - 1]++;
  }

  for (let i = 1; i < N + 1; i++) {
    if (chellengers[i - 1] === 0) {
      fail[i] = 0;
      continue;
    }
    fail[i] = chellengers[i - 1] / total;
    total -= chellengers[i - 1];
  }

  let temp = Object.entries(fail).sort((a, b) => b[1] - a[1]);
  answers = temp.map((x) => Number(x[0]));

  return answers;
}

const N = 4;
const stages = [1, 2, 1, 1, 1];

console.log(solution(N, stages));
