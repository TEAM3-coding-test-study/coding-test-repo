function solution(arr) {
  const stack = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == ")") {
      if (stack.length === 0) {
        return false;
      } else {
        stack.pop();
      }
    } else {
      stack.push(arr[i]);
    }
  }
  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(solution(["(", "(", "(", ")", ")", "(", ")"]));
