function solution(str1, str2) {
  const m = str1.length;
  const n = str2.length;

  //   1. DP란?
  // 큰 문제를 작은 문제로 쪼개서 푸는 방법이에요.
  // 이미 계산한 작은 문제의 답을 저장해 두었다가, 다시 쓸 때 또 계산하지 않고 꺼내 씁니다.
  //이렇게 저장해두는 표가 바로 dp 배열이에요.
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

//LCS = Longest Common Subsequence
//부분 수열 (Subsequence) 이란?
// 문자열에서 순서를 지키면서 일부 글자를 뽑아낸 것
// 연속될 필요는 없음
