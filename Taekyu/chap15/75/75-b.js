const tr1 = [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]];

const solution = (triangle) => {
  const n = triangle.length;
  const dp = Array.from(Array(n), () => Array(n).fill(0));

  console.log(triangle);

  // dp 테이블의 맨 아래쪽 라인 초기화
  for (let i = 0; i < n; i++) {
    dp[n - 1][i] = triangle[n - 1][i];
  }

  // 아래쪽 라인부터 올라가면서 dp 테이블 채우기
  for (let i = n - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      dp[i][j] = Math.max(dp[i + 1][j] + triangle[i][j], dp[i + 1][j + 1] + triangle[i][j]);
      console.log(dp);
    }
  }

  return dp[0][0];
};

console.log(solution(tr1));
