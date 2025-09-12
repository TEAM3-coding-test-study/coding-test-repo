function solution(str1, str2) {
  const cache = Array.from({ length: str1.length + 1 }, () =>
    Array(str2.length + 1).fill(0)
  );

  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      if (str1[i] === str2[j]) cache[i][j] = cache[i - 1][j - 1] + 1;
      else cache[i][j] = Math.max(cache[i - 1][j], cache[i][j - 1]);
    }
  }

  return cache[str1.length][str2.length];
}

console.log(solution("ABCBDAB", "BDCAB"));
console.log(solution("AGGTAB", "GXTXAYB"));
