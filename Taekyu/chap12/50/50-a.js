const isSafe = (curPos, row, col) => {
  // 같은 열 또는 대각선에 기존 퀸이 있는지 확인
  for (let r = 0; r < row; r++) {
    const c = curPos[r];
    if (c === col) return false; // 같은 열
    if (Math.abs(r - row) === Math.abs(c - col)) return false; // 대각선(둘의 행 차 == 열 차)
  }
  return true;
};

const moveQueen = (n, curPos, row, answers) => {
  if (row === n) {
    answers.push([...curPos]);
    return;
  }

  for (let col = 0; col < n; col++) {
    if (!isSafe(curPos, row, col)) continue;
    curPos[row] = col;
    moveQueen(n, curPos, row + 1, answers);
    curPos[row] = -1;
  }
};

const solution = (n) => {
  const curPos = Array(n).fill(-1);
  const answers = [];
  moveQueen(n, curPos, 0, answers);
  return {
    count: answers.length,
    positions: answers, // 각 해답은 [col0, col1, ... col(n-1)] 형태
  };
};

const { count, positions } = solution(4);
console.log(count);
