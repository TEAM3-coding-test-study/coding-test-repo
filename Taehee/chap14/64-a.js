function solution(n) {
  let rowEnd = n - 1;
  let colEnd = n - 1;
  let rowStart = 0;
  let colStart = 0;
  let answer = new Array(n).fill(0).map(() => new Array(n).fill(0));
  let value = 1;

  while (value !== n * n + 1) {
    for (let i = rowStart; i <= rowEnd; i++) {
      answer[colStart][i] = value++;
    }
    colStart++;
    for (let i = colStart; i <= colEnd; i++) {
      answer[i][rowEnd] = value++;
    }
    rowEnd--;
    for (let i = rowEnd; i >= rowStart; i--) {
      answer[colEnd][i] = value++;
    }
    colEnd--;
    for (let i = colEnd; i >= colStart; i--) {
      answer[i][rowStart] = value++;
    }
    rowStart++;
  }

  return answer;
}

console.log(solution(3));
console.log(solution(4));
