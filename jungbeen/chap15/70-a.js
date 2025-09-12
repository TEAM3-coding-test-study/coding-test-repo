function getLCS(arr, str1, str2, i, j) {
  if (i === -1 || j === -1) return 0;

  if (str1[i] === str2[j])
    arr[i][j] = getLCS(arr, str1, str2, i - 1, j - 1) + 1;
  else
    arr[i][j] = Math.max(
      getLCS(arr, str1, str2, i, j - 1),
      getLCS(arr, str1, str2, i - 1, j)
    );

  return arr[i][j];
}

function solution(str1, str2) {
  const cache = Array.from({ length: str1.length }, () =>
    Array(str2.length).fill(0)
  );

  return getLCS(cache, str1, str2, str1.length - 1, str2.length - 1);
}

// console.log(solution("ABCBDAB", "BDCAB"));
console.log(solution("AGGTAB", "GXTXAYB"));
