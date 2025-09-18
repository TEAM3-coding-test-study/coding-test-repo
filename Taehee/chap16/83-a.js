function solution(people, limit) {
  let m = people.length - 1;
  var answer = 0;
  let array = [];
  people.sort((a, b) => {
    return b - a;
  });
  while (people.length > 0) {
    if (people[0] + people[m] <= limit) {
      people.pop();
      people.shift();
      answer += 1;
      m -= 2;
    } else {
      people.shift();
      answer += 1;
      m -= 1;
    }
  }
  return answer;
}
