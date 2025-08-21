function solution(str) {
  if (str.length % 2) return false;

  let c = 0;
  for (let i of str) {
    if (i === "(") c++;
    else c--;
    if (c < 0) return false;
  }

  return c === 0;
}

console.log(solution(")()("));
