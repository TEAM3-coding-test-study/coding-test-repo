function solution(d, budget) {
  var answer = 0;
  d.sort((a, b) => a - b);
  for (let i of d) {
    if (budget < i) break;

    answer += 1;
    budget -= i;
  }
  return answer;
}

console.log(solution([1, 3, 2, 5, 4], 9));
