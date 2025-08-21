function solution(nodes) {
  const stack = [];
  let i = 0;
  const len = nodes.length;
  const answer = [];
  const tempArr = [];

  stack.push(0);
  while (stack.length > 0) {
    i = stack.pop();
    tempArr.push(nodes[i]);
    if (2 * i + 2 < len) stack.push(2 * i + 2);
    if (2 * i + 1 < len) stack.push(2 * i + 1);
  }
  answer.push(tempArr.join(" "));

  tempArr.length = 0;
  i = 0;
  while (stack.length > 0 || i < len) {
    while (i < len) {
      stack.push(i);
      i = 2 * i + 1;
    }
    i = stack.pop();

    tempArr.push(nodes[i]);

    i = i * 2 + 2;
  }
  answer.push(tempArr.join(" "));

  tempArr.length = 0;
  i = 0;
  stack.push(0);
  while (stack.length > 0) {
    i = stack.pop();
    tempArr.push(nodes[i]);

    if (2 * i + 1 < len) stack.push(2 * i + 1);
    if (2 * i + 2 < len) stack.push(2 * i + 2);
  }
  tempArr.reverse();
  answer.push(tempArr.join(" "));

  return answer;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7]));
