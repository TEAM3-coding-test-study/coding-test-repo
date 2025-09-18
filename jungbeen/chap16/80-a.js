function solution(amount) {
  const answer = [];
  while (amount > 0) {
    if (amount >= 100) {
      amount -= 100;
      answer.push(100);
    } else if (amount >= 50) {
      amount -= 50;
      answer.push(50);
    } else if (amount >= 10) {
      amount -= 10;
      answer.push(10);
    } else {
      for (let i = 0; i < amount; i++) answer.push(1);
      amount = 0;
    }
  }

  return answer;
}

console.log(solution(350));
