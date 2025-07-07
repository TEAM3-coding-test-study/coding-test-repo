const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

const moves = [1, 5, 3, 5, 1, 2, 1, 4];

const solution = (board, moves) => {
  const bracket = new Array();
  let vanished = 0;
  Outer: for (let i = 0; i < moves.length; i++) {
    const posNum = moves[i] - 1;
    for (let j = 0; j < board.length; j++) {
      const targetData = board[j][posNum];
      if (targetData === 0) continue;
      // 타겟 데이터가 0이면 아이템이 게임화면에 없다는 뜻이므로 다음 행으로 넘어감
      else {
        if (bracket.length === 0) {
          bracket.push(targetData);
          board[j][posNum] = 0; // 바구니에 데이터를 옮기고나서 게임화면의 데이터는 제거해줘야함
          continue Outer;
        } else {
          const top = bracket[bracket.length - 1];
          if (top === targetData) {
            bracket.pop();
            vanished += 2;
            board[j][posNum] = 0;
            continue Outer;
          } else {
            bracket.push(targetData);
            board[j][posNum] = 0;
            continue Outer;
          }
        }
      }
    }
  }
  return vanished;
};

console.log(solution(board, moves));
