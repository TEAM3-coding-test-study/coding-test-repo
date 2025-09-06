const solution = (nums) => {
  const dp = new Array(nums.length);
  let largest = null;

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      dp[0] = 1;
      largest = 1;
      continue;
    }
    const temp = [];
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) temp.push(dp[j]);
    }
    dp[i] = Math.max(...temp) + 1;
    if (dp[i] > largest) largest = dp[i];
  }

  return largest;
};

console.log(solution([1, 4, 2, 3, 1, 5, 7, 3]));
