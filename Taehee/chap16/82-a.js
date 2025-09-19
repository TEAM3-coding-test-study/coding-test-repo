function solution(d, budget) {
  var answer = 0;
  d.sort((a, b) => {
    return a - b;
  });
  for (const n of d) {
    if (budget <= 0) {
      break;
    }
    if (budget - n >= 0) {
      budget -= n;
      answer += 1;
    }
  }
  return answer;
}
