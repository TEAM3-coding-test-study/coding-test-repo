function solution(arr) {
//   const dp = [];
//   dp[0] = 1;
  const dp = Array(arr.length).fill(1);
  for (let i = 0; i < arr.length; i++) {
    let maxDp = 0;
    for (let j = 0; j <= i; j++) {
      if (dp[j] > maxDp) {
        if (arr[j] < arr[i]) {
          maxDp = dp[j];
          dp[i] = maxDp + 1;
        }
      }
    }
  }

  for (const d of dp) {
    console.log(d);
  }
  return Math.max(...dp);
}

// solution([1, 4, 2, 3, 1, 5, 7, 3])
console.log(solution([1, 4, 2, 3, 1, 5, 7, 3])); // 5
// console.log(solution([3, 2, 1])) // 1
