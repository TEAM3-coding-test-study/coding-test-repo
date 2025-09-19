function solution(amount) {
  let answer = [];
  while (Math.floor(amount / 100) > 0) {
    answer.push(100);
    amount -= 100;
  }
  while (Math.floor(amount / 50) > 0) {
    answer.push(50);
    amount -= 50;
  }
  while (Math.floor(amount / 10) > 0) {
    answer.push(10);
    amount -= 10;
  }
  while (amount > 0) {
    answer.push(1);
    amount -= 1;
  }
  return answer;
}
console.log(solution(123));
console.log(solution(350));
