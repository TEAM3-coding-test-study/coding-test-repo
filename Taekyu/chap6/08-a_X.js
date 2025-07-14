/*
 * 입력으로는 여는 소괄호와 닫는 소괄호로 구성된 문자열
 * 일단 문자열을 배열에 push해야될듯
 * 차례대로 앞에서부터 push하면서 push되는 문자가 여는 괄호면 push, 닫는 괄호면 pop
 * 끝까지 진행해서 만약에 배열에 들어있는 아이템이 없으면 true, 있으면 false
 */

const str = "((())()";

const solution = (str) => {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") stack.push(str[i]);
    else if (str[i] === ")") stack.pop();
  }

  if (stack.length === 0) return true;
  else return false;
};

console.log(solution(str));
