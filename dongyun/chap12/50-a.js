function solution(n) {
  var answer = 0;

  const board = [...new Array(n)].map((_, i) => new Array(n).fill(0));

  const compareRowCol = (y, x) => {
    if (y >= 0 && y < n && x >= 0 && x < n) {
      // 해당 행에 퀸 존재 여부
      if (board[y].includes(1)) {
        return false;
      }
      // 해당 열에 퀸 존재 여부
      if (board.some((row) => row[x] === 1)) {
        return false;
      }
      return true;
    } else {
      return false;
    }
  };

  //좌우 대각선 퀸 존재 여부
  const compareDiagonal = (y, x) => {
    // 좌상 -> 우하
    let cY = y;
    let cX = x;
    while (cY < n && cX < n) {
      if (board[cY][cX] === 1) {
        return false;
      }
      cY += 1;
      cX += 1;
    }
    cY = y;
    cX = x;
    while (cY >= 0 && cX >= 0) {
      if (board[cY][cX] === 1) {
        return false;
      }
      cY -= 1;
      cX -= 1;
    }

    // 우상 -> 좌하
    cY = y;
    cX = x;
    while (cY < n && cX < n) {
      if (board[cY][cX] === 1) {
        return false;
      }
      cY += 1;
      cX -= 1;
    }
    cY = y;
    cX = x;
    while (cY >= 0 && cX >= 0) {
      if (board[cY][cX] === 1) {
        return false;
      }
      cY -= 1;
      cX += 1;
    }

    return true;
  };

  //   const putQueen = (queenCnt) => {
  const putQueen = (row, queenCnt) => {
    // n개 배치에 성공한 경우
    if (queenCnt === n) {
      //   console.log("n개 배치 성공");
      //   console.log(board[0]);
      //   console.log(board[1]);
      //   console.log(board[2]);
      //   console.log(board[3]);

      answer += 1;
      return false;
    }

    for (let i = 0; i < n; i++) {
      if (compareDiagonal(row, i) && compareRowCol(row, i)) {
        board[row][i] = 1;
        queenCnt += 1;
        // console.log("y : ", row, " x : ", i, "cnt : ", queenCnt);
        // 재귀로 다음 퀸 놓기 수행, 실패시 복원.
        if (row >= n || !putQueen(row + 1, queenCnt)) {
          //   console.log("실패로 복원 y : ", row, " x : ", i, "cnt : ", queenCnt);
          board[row][i] = 0;
          queenCnt -= 1;
        } else {
          //   console.log("체크 성공 y : ", i, " x : ", j, "cnt : ", queenCnt);
        }
      }
    }
    return false;
  };

  putQueen(0, 0);
  return answer;
}

console.log(solution(4));
