const decimal = 10;

const solution = (decimal) => {
  const stack = [];
  let n = decimal;
  while (n !== 0) {
    stack.push(n % 2);
    n = Math.floor(n / 2);
  }
  let binary = "";

  while (stack.length != 0) {
    binary += stack.pop().toString();
  }
  return binary;
};

console.log(solution(decimal));
