function solution(progresses, speeds) {
  var count = 0;
  var answer = [];
  while (progresses.length > 0) {
    count = 0;
    for (var i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
    }
    while (progresses.length > 0 && progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      count += 1;
    }

    if (count > 0) {
      answer.push(count);
    }
  }
  return answer;
}
