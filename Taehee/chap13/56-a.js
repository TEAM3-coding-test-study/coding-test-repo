function solution(strings, n) {
  let answer = [...strings];
  for (var i = 0; i < answer.length; i++) {
    for (var a = i; a < answer.length; a++) {
      if (answer[i][n] < answer[a][n]) {
        continue;
      } else if (answer[i][n] > answer[a][n]) {
        [answer[i], answer[a]] = [answer[a], answer[i]];
      } else {
        if (answer[i] < answer[a]) {
          continue;
        } else {
          [answer[i], answer[a]] = [answer[a], answer[i]];
        }
      }
    }
  }
  return answer;
}
