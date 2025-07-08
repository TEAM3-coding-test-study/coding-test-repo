function solution(numbers) {
  var answer = [];
  for (var n = 0; n < numbers.length; n++) {
    for (var i = 0; i < numbers.length; i++) {
      if (n != i) {
        var temp = numbers[i] + numbers[n];
        answer = [...answer, temp];
      }
    }
  }
  answer = [...new Set(answer)];
  answer.sort((a, b) => a - b);
  return answer;
}
