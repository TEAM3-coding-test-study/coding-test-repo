// 현재 주식보다 이전 주식의 가격이 높으면,
// 이전 주식의 길이를 확정한다.

// 이전 주식들을 하나씩 보고, 현재 주식 가격보다 큰 주식 가격이 있다면,
// 그 주식의 길이를 확정한다.

// 길이를 확정한 주식은 계산에서 제외함으로써, 효율성을 높힌다.

// 🎯 stack에 주식 가격이 아니라, index를 넣는다!!
// index간의 간격 == 길이가 되므로..

function solution(prices) {
  var answer = new Array(prices.length).fill(0);

  const stack = [0];
  let top = 0;

  for (let i = 1; i < prices.length; i++) {
    //굳이 top을 쓰지 않네..
    while (stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
      const j = stack.pop();
      answer[j] = i - j;
    }
    stack.push(i);
  }

  while (stack.length > 0) {
    const j = stack.pop();
    answer[j] = prices.length - 1 - j;
  }
  // if(prices[stack[top]] <= prices[i]){
  //   stack.push(i);
  //   top++;
  // }
  // if (prices[stack[top]] > prices[i]) {
  //   stack.pop();
  //   top--;
  // }
  // for(let j = 0; j < i; j++){
  //   if(stack[j] > stack[top]){
  //   }
  // }

  return answer;
}
