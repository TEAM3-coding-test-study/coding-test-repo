function solution(triangle) {
  var answer = 0;
  const dp = triangle.map((t) => [...t].fill(0));
  dp[0][0] = triangle[0][0];

  for (let i = 1; i < triangle.length; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      if (j === 0) dp[i][j] = triangle[i][j] + dp[i - 1][j];
      else if (j === triangle[i].length - 1)
        dp[i][j] = triangle[i][j] + dp[i - 1][j - 1];
      else dp[i][j] = triangle[i][j] + Math.max(dp[i - 1][j - 1], dp[i - 1][j]);
    }
  }

  return Math.max(...dp[triangle.length - 1]);
}

console.log(solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]));
