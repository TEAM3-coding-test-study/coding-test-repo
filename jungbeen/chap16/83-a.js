function solution(people, limit) {
  var answer = 0;
  let frontIdx = 0;
  let lastIdx = people.length - 1;
  people.sort((a, b) => a - b);

  while (frontIdx <= lastIdx) {
    if (frontIdx === lastIdx) {
      answer++;
      break;
    }

    if (people[frontIdx] + people[lastIdx--] <= limit) frontIdx++;

    answer++;
  }
  return answer;
}

console.log(solution([70, 50, 80, 50], 100));
