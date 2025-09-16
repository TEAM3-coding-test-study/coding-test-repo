function solution(str1, str2) {
  const m = str1.length;
  const n = str2.length;
  let arr = Array.from(Array(m + 1), () => Array(n + 1).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (str1[i] === str2[j]) {
        arr[i + 1][j + 1] = arr[i][j] + 1;
      } else {
        arr[i + 1][j + 1] = Math.max(arr[i][j + 1], arr[i + 1][j]);
      }
    }
  }

  return arr[m][n];
}
console.log(solution("ABCBDAB", "BDCAB"));
console.log(solution("AGGTAB", "GXTXAYB"));
