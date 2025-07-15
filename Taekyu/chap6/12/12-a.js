const prices = [1, 2, 3, 2, 3];

const solution = (prices) => {
  const n = prices.length;
  const resultArr = new Array(n).fill(0);
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] <= prices[j]) resultArr[i]++;
      else {
        resultArr[i] = 1;
        break;
      }
    }
  }
  return resultArr;
};

console.log(solution(prices));
