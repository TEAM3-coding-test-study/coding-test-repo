export default function solution(testString) {
  const testArray = testString.split("");

  const stack = [];

  for (const [index, data] of testArray.entries()) {
    console.log(data);
    if (data === "(") stack.push(data);
    if (data === ")" && stack.length !== 0) stack.pop();
    else if (stack.length === 0) console.log("이미 emtpy한 stack입니다.");
  }

  console.log(stack);
  console.log(stack.length);
  return stack.length === 0;
}
