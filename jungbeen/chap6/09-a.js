function solution(num) {
  let answer = "";
  let reverse = [];
  while (num > 0) {
    reverse.push(num % 2);
    num = Math.floor(num / 2);
  }

  const len = reverse.length;
  for (let i = 0; i < len; i++) {
    answer += reverse.pop();
  }

  return answer;
}

console.log(solution(12345));
