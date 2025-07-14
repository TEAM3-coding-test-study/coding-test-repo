function solution(prices) {
  let answer = [];
  let stc = [];
  let len = prices.length;

  answer = [...new Array(len)].fill(0);
  for (let i = 0; i < len; i++) {
    while (stc.length > 0 && prices[stc[stc.length - 1]] > prices[i]) {
      let j = stc.pop();
      answer[j] = i - j;
    }
    stc.push(i);
  }
  for (let i of stc) {
    answer[i] = len - i - 1;
  }
  return answer;
}

// console.log(solution([3, 5, 2, 6, 7, 8, 1, 10, 9]));
console.log(solution([1, 2, 3, 2, 3]));
