const land1 = [
  [1, 2, 3, 5],
  [5, 6, 7, 8],
  [4, 3, 2, 1],
];

const solution = (land) => {
  const dp = Array.from({ length: land.length }, (v) => Array(land[0].length).fill(0));
  //   console.log(dp);

  for (let i = 0; i < land[0].length; i++) {
    dp[0][i] = land[0][i];
  }

  for (let i = 1; i < land.length; i++) {
    for (let j = 0; j < land[0].length; j++) {
      dp[i][j] = dp[i - 1][j] + Math.max(...land[i].filter((_, idx) => idx !== j));
      //   console.log(dp);
    }
  }

  return Math.max(...dp[dp.length - 1]);
};

console.log(solution(land1));
