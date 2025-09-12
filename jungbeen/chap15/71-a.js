function solution(nums) {
  let maxi = 1;
  const dp = Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    let localIdx = -1;
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        if (localIdx === -1 || dp[j] > dp[localIdx]) localIdx = j;
      }
    }
    if (localIdx !== -1) {
      dp[i] = dp[localIdx] + 1;
      if (maxi < dp[localIdx] + 1) maxi = dp[localIdx] + 1;
    }
  }

  return maxi;
}

console.log(solution([1, 4, 2, 3, 1, 5, 7, 3]));
console.log(solution([3, 2, 1]));
