const board1 = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
];

const findCandidates = (candArr, row, col, box) => {
  console.log("row:", row);
  console.log("col:", col);
  console.log("box:", box);
  for (const cand of candArr) {
    if (!row.includes(cand) && !col.includes(cand) && !box.includes(cand)) {
      console.log("cand:", cand);
      return cand;
    }
  }
};

// 타겟 셀이 속한 박스의 요소들을 배열로 변환
const makeBoxArr = (board, i, j) => {
  console.log("(i,j):", i, j);
  let rowNum;
  let colNum;
  const resultArr = [];
  if (i < 3) {
    rowNum = 0;
  } else if (i >= 3 && i < 6) {
    rowNum = 1;
  } else {
    rowNum = 2;
  }
  if (j < 3) {
    colNum = 0;
  } else if (j >= 3 && j < 6) {
    colNum = 1;
  } else {
    colNum = 2;
  }

  for (let m = rowNum * 3; m < rowNum * 3 + 3; m++) {
    for (let n = colNum * 3; n < colNum * 3 + 3; n++) {
      resultArr.push(board[m][n]);
    }
  }
  return resultArr;
};

const makeColArr = (board, j) => {
  const resultArr = [];
  for (let i = 0; i < board.length; i++) {
    resultArr.push(board[i][j]);
  }
  return resultArr;
};

const solution = (board) => {
  const candArr = Array.from({ length: 9 }, (v, k) => k + 1);
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] !== 0) continue;
      board[i][j] = findCandidates(
        candArr,
        [...board[i]],
        makeColArr(board, j),
        makeBoxArr(board, i, j)
      );
    }
  }
  return board;
};

console.log(solution(board1));
