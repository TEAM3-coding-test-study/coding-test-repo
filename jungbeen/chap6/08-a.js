function solution(str) {
  if (str.length % 2) return false;

  const arr = [];
  for (let i of str) {
    if (i === "(") arr.push(i);
    else {
      if (!arr.length) return false;
      arr.pop();
    }
  }
  return arr.length === 0;
}

console.log(solution("(()))"));
