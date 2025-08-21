function solution(n, a, b) {
  var answer = 0;

  while (Math.ceil(a) !== Math.ceil(b)) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer++;
  }
  return answer;
}

console.log(solution(8, 4, 7));
