function solution(prices) {
  var answer = Array(prices.length).fill(0);

  const stack = [];
  let top = -1;

  for (const [index, price] of prices.entries()) {
    console.log("바깥 반복 시작 index = ", index)
    if (top === -1) {
      stack.push(price);
      top++;
    }
    else if (stack[top] <= price) {
      //이전 값보다 주식 가격이 증가 or 유지
      stack.push(price);
      top++;

      // answer[index]++;
    }
    else if (stack[top] > price) {
      //이전 값보다 주식 가격이 하락
      stack.pop();
      top--;

      // answer[index] = 1;
    }
    for (let i = 0; i < prices.length; i++) {
      if (i < index) {
        //과거 주식 가격
        if (prices[i] < stack[top]) {
          answer[i]++;
        }
      }
      if (i === index) {
        //현재 주식 가격
        answer[i] = 1;
      }
    }
    answer[index]++;
  }
  answer[prices.length - 1] = 0;
  console.log(answer)
  return answer;
}

solution([1, 2, 3, 2, 3]);
// solution([5, 4, 3, 2, 1])