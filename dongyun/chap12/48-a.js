function solution(board) {
  const MAX_INDEX = 8;
  const BOX_SIZE = 3;
  const newBoard = structuredClone(board);

  //   const goNext = (y, x) => {
  //     // 판 내부 범위인 경우
  //     if (y < MAX_INDEX) {
  //       if (x < MAX_INDEX) {
  //         console.log(y, x, MAX_INDEX);
  //         return [y, x + 1];
  //       } else {
  //         console.log(x, "y 증가");
  //         return [y + 1, 0];
  //       }
  //     } else {
  //       if (x < MAX_INDEX) {
  //         console.log("!!!");
  //         return [y, x + 1];
  //       } else {
  //         //판 범위 초과하는 경우
  //         console.log("QQQ");
  //         return [-1, -1];
  //       }
  //     }
  //   };

  const goNext = (y, x) => {
    // 현재 위치가 마지막 칸(y와 x 모두 MAX_INDEX)인 경우
    if (y >= MAX_INDEX && x >= MAX_INDEX) {
      console.log("판 탈출");
      return [-1, -1]; // 탐색 종료
    }
    // x가 마지막 칸이 아니라면, x를 1 증가시킨다.
    if (x < MAX_INDEX) {
      console.log("마지막 칸 아님 : y, x : ", y, x);
      return [y, x + 1];
    }
    // x가 마지막 칸이라면, 다음 줄의 처음으로 이동한다. (y는 1 증가, x는 0)
    // (이 코드가 실행될 때는 항상 x >= MAX_INDEX 이다)
    console.log("y증가");
    return [y + 1, 0];
  };
  
  const checkCol = (newBoard, y, x, num) => {
    // console.log(JSON.parse(JSON.stringify(newBoard)));
    for (let i = 0; i <= MAX_INDEX; i++) {
      if (num === newBoard[i][x]) {
        console.log("checkCol 탈출 : i, x, board", i, x, newBoard[i][x]);
        return false;
      }
    }
    return true;
  };

  const checkRow = (newBoard, y, x, num) => {
    for (let i = 0; i <= MAX_INDEX; i++) {
      if (num === newBoard[y][i]) {
        console.log("checkRow 탈출 : y, i, board", y, i, newBoard[y][i]);
        return false;
      }
    }
    return true;
  };

  const checkBox = (newBoard, y, x, num) => {
    let centerY = -1;
    let centerX = -1;

    if (y < 3) {
      centerY = 1;
    } else if (y < 6) {
      centerY = 4;
    } else if (y < 9) {
      centerY = 7;
    }

    if (x < 3) {
      centerX = 1;
    } else if (x < 6) {
      centerX = 4;
    } else if (x < 9) {
      centerX = 7;
    }

    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        if (newBoard[centerY + i][centerX + j] === num) {
          console.log("checkbox 탈출");
          return false;
        }
      }
    }

    return true;
  };

  const fillBoard = (y, x, num) => {
    // console.log(y, x, num);
    // 다음 순회 안함(가로 중복, 세로 중복, 박스 중복)
    if (
      !checkCol(newBoard, y, x, num) ||
      !checkRow(newBoard, y, x, num) ||
      !checkBox(newBoard, y, x, num)
    ) {
      return false;
    }
    if (newBoard[y][x] === 0) {
      newBoard[y][x] = num;
      console.log(num, "으로 채움 y, x : ", y, x);
    }
    // 다음 칸 이동
    const [ny, nx] = goNext(y, x);
    if (ny === -1 && nx === -1) {
      return false;
    } else {
      for (let i = 1; i <= 9; i++) {
        fillBoard(ny, nx, i);
      }
    }

    return false;
  };

  fillBoard(0, 0, 1);

  return newBoard;
}

console.log(
  solution([
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
  ])
);

// [
//   [5, 3, 4, 6, 7, 8, 9, 1, 2],
//   [6, 7, 2, 1, 9, 5, 3, 4, 8],
//   [1, 9, 8, 3, 4, 2, 5, 6, 7],
//   [8, 5, 9, 7, 6, 1, 4, 2, 3],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 6, 1, 5, 3, 7, 2, 8, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 4, 5, 2, 8, 6, 1, 7, 9],
// ]

// ------------------------------------------------------

// console.log(
//   solution(
//     [
//       [0, 0, 0, 0, 0, 0, 0, 0, 0],
//       [0, 0, 0, 0, 0, 0, 0, 0, 0],
//       [0, 0, 0, 0, 0, 0, 0, 0, 0],
//       [0, 0, 0, 0, 0, 0, 0, 0, 0],
//       [0, 0, 0, 0, 0, 0, 0, 0, 0],
//       [0, 0, 0, 0, 0, 0, 0, 0, 0],
//       [0, 0, 0, 0, 0, 0, 0, 0, 0],
//       [0, 0, 0, 0, 0, 0, 0, 0, 0],
//       [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     ]
//   )
// )

// [
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [4, 5, 6, 7, 8, 9, 1, 2, 3],
//   [7, 8, 9, 1, 2, 3, 4, 5, 6],
//   [2, 3, 4, 5, 6, 7, 8, 9, 1],
//   [5, 6, 7, 8, 9, 1, 2, 3, 4],
//   [8, 9, 1, 2, 3, 4, 5, 6, 7],
//   [3, 4, 5, 6, 7, 8, 9, 1, 2],
//   [6, 7, 8, 9, 1, 2, 3, 4, 5],
//   [9, 1, 2, 3, 4, 5, 6, 7, 8],
// ]
