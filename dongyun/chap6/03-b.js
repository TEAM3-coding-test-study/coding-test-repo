const test1 = "[](){}";
const test2 = "}]()[{";
const test3 = "[)(]";
const test4 = "}}}";

export default function solution(s) {
  var answer = -1;

  const arr = s.split("");
  const arr2 = [...arr, ...arr];
    
  const stack = [];

  let start = 0;
  let end = arr.length - 1;

console.log(arr2, end)
    
  while (start < arr.length) {
    for (let i = start; i < start + arr.length; i++) {
      if (arr2[i] === "(" || arr2[i] === "{" || arr2[i] === "[") {
        stack.push(arr2[i]);
      } 
        else if(stack.length === 0) isFail= true;
        else stack.pop();
    }
      console.log("start:", start, "length:",stack.length)
    if (stack.length === 0 && !isFail) answer += 1;
    if (start < arr.length) {
      start += 1;
      end += 1;
    }
  }
  return answer;
}

solution(test1);
