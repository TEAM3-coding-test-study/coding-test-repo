function solution(progresses, speeds) {
  var answer = [];
  let count = 0;
  let prev = Math.ceil((100 - progresses[0]) / speeds[0]);

  for (let i = 0; i < progresses.length; i++) {
    let rest = Math.ceil((100 - progresses[i]) / speeds[i]);
    if (prev >= rest) {
      count++;
    } else {
      answer.push(count);
      count = 1;
      prev = rest;
    }
  }
  answer.push(count);
  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
// console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
