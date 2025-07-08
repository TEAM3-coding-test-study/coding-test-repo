const answers = [1, 2, 3, 4, 5];

function solution(answers) {
  var answer = [];
  var patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  var count = [0, 0, 0];

  for (let [i, ans] of answers.entries()) {
    for (let [j, pattern] of patterns.entries()) {
      if (ans === pattern[i % pattern.length]) count[j]++;
    }
  }

  let maxSC = Math.max(...count);

  for (let [i, ct] of count.entries()) {
    if (ct === maxSC) answer.push(i + 1);
  }
  return answer;
}

console.log(solution(answers));
