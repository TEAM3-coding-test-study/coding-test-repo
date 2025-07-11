const test1 = "[](){}";
const test2 = "}]()[{";
const test3 = "[)(]";
const test4 = "}}}";

export default function solution(s) {
  var answer = 0;
  const arr = s.split("");
  const arr2 = [...arr, ...arr];

  let start = 0;

  while (start < arr.length) {
    let isFail = false;
    let stack = [];

    if (arr2[start] === ")" || arr2[start] === "}" || arr2[start] === "]") isFail = true;

    for (let i = start; i < start + arr.length; i++) {
      if (arr2[i] === "(" || arr2[i] === "{" || arr2[i] === "[") {
        stack.push(arr2[i]);
      }
      else if (stack.length === 0) isFail = true;
      else {
        const top = stack.pop()
        if (top.codePointAt(0) + 1 !== arr2[i].codePointAt(0) && top.codePointAt(0) + 2 !== arr2[i].codePointAt(0))
          isFail = true
      }
    }
    if (stack.length === 0 && !isFail) { console.log("start:", start, "length:", stack.length, "isFail:", isFail); answer += 1; }
    if (start < arr.length) {
      start += 1;
    }
  }
  return answer;
}

solution(test1);
