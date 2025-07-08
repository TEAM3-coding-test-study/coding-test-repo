const test1 = "[](){}";
const test2 = "}]()[{";
const test3 = "[)(]";
const test4 = "}}}";

function solution(s) {
  var answer = -1;

  const arr = s.split("");
  const arr2 = [...arr, ...arr];
  const stack = [];

  let start = 0;
  let end = arr.length - 1;

  while (start < arr.length - 1) {
    for (let i = start; i <= end; i++) {
      console.log(arr2[i]);
      if (arr2[i] === ("(" || "{" || "[")) {
        stack.push(arr2[i]);
      } else stack.pop();
    }
    if (stack.length === 0) answer += 1;
    if (start < arr.length) {
      start += 1;
      end += 1;
    }
  }
  return answer;
}

solution(test1);
