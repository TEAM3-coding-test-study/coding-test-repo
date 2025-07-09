function solution(prices) {
  var answer = [];

  const stack = [];
  let top = -1;

  for (const [index, price] of prices.entries()) {
    if (top === -1) {
      stack.push(price);
      top++;
      continue;
    }
    if (stack[top] <= price) {
      stack.push(price);
      top++;
      continue;
    }
    while (stack[top] <= price || top === -1)
      if (stack[top] > price) {
        stack.pop();
        top--;
        continue;
      }
  }

  return answer;
}
