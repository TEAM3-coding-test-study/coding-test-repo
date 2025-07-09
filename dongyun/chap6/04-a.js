function solution(s) {
  const arr = s.split("");
  const stack = [];
  let top = -1;

  for (const [index, ch] of arr.entries()) {
    if (top === -1) {
      stack.push(ch);
      top++;
      continue;
    }
    if (stack[top] === ch) {
      stack.pop();
      top--;
      continue;
    }
    stack.push(ch);
    top++;
  }

  if (stack.length === 0) return 1;
  return 0;
}
