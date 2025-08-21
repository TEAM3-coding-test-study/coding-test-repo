function solution(s) {
  if (s.length % 2) return 0;
  var answer = 0;
  let stc = [];

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s.length; j++) {
      let now = s[(i + j) % s.length];
      if (now === "(" || now === "{" || now === "[") stc.push(now);
      else if (now === ")") {
        let top = stc.pop();
        if (!top || top !== "(") break;
      } else if (now === "}") {
        let top = stc.pop();
        if (!top || top !== "{") break;
      } else if (now === "]") {
        let top = stc.pop();
        if (!top || top !== "[") break;
      }

      if (j === s.length - 1 && stc.length === 0) answer++;
    }
  }

  return answer;
}

const s = "}]()[{";
console.log(solution(s));
