const solution = (str1, str2) => {
  // 메모이제이션 2차원 배열 생성
  const dp = Array.from({ length: str1.length + 1 }, (v) => {
    return Array(str2.length + 1).fill(0);
  });
  let largest = 0;

  for (let i = 1; i < str1.length + 1; i++) {
    for (let j = 1; j < str2.length + 1; j++) {
      if (str1[i] === str2[j]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        if (dp[i][j] > largest) largest = dp[i][j]; // 최대값을 추적
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        if (dp[i][j] > largest) largest = dp[i][j];
      }
    }
  }

  return largest;
};

console.log(solution("ABCBDAB", "BDCAB"));
