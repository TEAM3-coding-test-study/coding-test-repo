function solution(topping) {
  let first = [];
  let second = [];
  var answer = 0;
  let temp1 = [];
  let temp2 = [];
  for (let i = 2; i < topping.length + 1; i++) {
    temp1 = [];
    temp2 = [];
    first = topping.slice(0, i);
    second = topping.slice(i, topping.length);
    for (char of first) {
      if (!temp1.includes(char)) {
        temp1.push(char);
      }
    }
    for (char of second) {
      if (!temp2.includes(char)) {
        temp2.push(char);
      }
    }
    if (temp1.length === temp2.length) {
      answer++;
    }
  }
  return answer;
}
