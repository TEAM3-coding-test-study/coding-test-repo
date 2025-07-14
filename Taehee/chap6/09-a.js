function solution(demical) {
  const stack = [];
  let ans = "";

  while (true) {
    stack.push(demical % 2);
    demical = Math.floor(demical / 2);
    if (demical === 0) {
      break;
    }
  }
  while (stack.length > 0) {
    ans += stack.pop();
  }
  return ans;
}

console.log(solution(12345));
