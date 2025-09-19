function solution(people, limit) {
  let m = people.length - 1;
  let n = 0;
  var answer = 0;
  let array = [];
  people.sort((a, b) => {
    return b - a;
  });
  while (n <= m) {
    if (people[n] + people[m] <= limit) {
      n += 1;
      answer += 1;
      m -= 1;
    } else {
      n += 1;
      answer += 1;
    }
  }
  return answer;
}
