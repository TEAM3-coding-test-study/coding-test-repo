numbers = [2, 1, 3, 4, 1];

function solution(numbers) {
  var answer = [];
  let len = numbers.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }
  answer = [...new Set(answer)].sort((a, b) => a - b);
  return answer;
}

console.log(solution(numbers));
