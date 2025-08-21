function isValid(s) {
  const stack = [];
  for (let ch of s) {
    if (ch === "(" || ch === "[" || ch === "{") {
      stack.push(ch);
    } else {
      if (stack.length === 0) return false;
      const last = stack.pop();
      if (
        (ch === ")" && last !== "(") ||
        (ch === "]" && last !== "[") ||
        (ch === "}" && last !== "{")
      ) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

function solution(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    const rotated = s.slice(i) + s.slice(0, i);
    if (isValid(rotated)) {
      count++;
    }
  }
  return count;
}
