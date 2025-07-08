const answers = [2, 1, 2, 3, 2, 4];

function solution(answers) {
  var answer = [];
  var thirdpattern = [3, 1, 2, 4, 5];
  var secondpattern = [1, 3, 4, 5];
  let count1 = 0;
  let count2 = 0;
  let count3 = 0;
  for (let i = 0; i < answers.length; i++) {
    if ((i % 5) + 1 === answers[i]) count1++;
    if (!(i % 2) && answers[i] === 2) count2++;
    else if (i % 2 && answers[i] === secondpattern[((i % 8) - 1) / 2]) count2++;
    if (answers[i] === thirdpattern[Math.floor((i % 10) / 2)]) count3++;
  }

  if (count1 > count2) {
    if (count1 > count3) answer.push(1);
    else if (count1 === count3) {
      answer.push(1);
      answer.push(3);
    } else answer.push(3);
  } else if (count1 === count2) {
    if (count1 === count3) {
      answer.push(1);
      answer.push(2);
      answer.push(3);
    } else if (count1 > count3) {
      answer.push(1);
      answer.push(2);
    } else answer.push(3);
  } else {
    if (count2 > count3) answer.push(2);
    else if (count2 === count3) {
      answer.push(2);
      answer.push(3);
    } else answer.push(3);
  }
  return answer;
}

console.log(solution(answers));
