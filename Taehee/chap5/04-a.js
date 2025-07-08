function solution(answers) {
  var answer = [];
  var first = [1, 2, 3, 4, 5];
  var second = [2, 1, 2, 3, 2, 4, 2, 5];
  var third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  var winner = [0, 0, 0];
  for (var i = 0; i < answers.length; i++) {
    if (answers[i] == first[i % first.length]) {
      winner[0]++;
    }
    if (answers[i] == second[i % second.length]) {
      winner[1]++;
    }
    if (answers[i] == third[i % third.length]) {
      winner[2]++;
    }
  }
  const temp = [...winner];
  temp.sort((a, b) => b - a);
  for (var num = 0; num < 3; num++) {
    if (temp[0] == winner[num]) {
      answer.push(num + 1);
    }
  }
  return answer;
}
