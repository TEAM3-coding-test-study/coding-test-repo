function solution(s) {
  let stc = [];
  let top = -1;

  for (let i of s) {
    if (top >= 0 && i === stc[top]) {
      stc.pop();
      top--;
      continue;
    } else {
      stc.push(i);
      top++;
    }
  }

  return +(stc.length === 0);
}

const s = "cdcd";
console.log(solution(s));
