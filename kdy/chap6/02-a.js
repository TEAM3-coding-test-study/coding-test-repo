export default function solution(decimal) {
  const stack = [];
  let answer = "";
  do {
    stack.push(decimal % 2);
    decimal = Math.floor(decimal / 2);
    console.log(decimal);
  } while (decimal > 0);

  do {
    answer = answer + stack.pop();
  } while (stack.length !== 0);

  console.log(answer);

  return answer;
}

solution(27);
