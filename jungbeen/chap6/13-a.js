function solution(board, moves) {
  var answer = 0;
  let stc = [];

  for (let i of moves) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][i - 1] !== 0) {
        let g = board[j][i - 1];
        board[j][i - 1] = 0;
        if (stc.length > 0 && g === stc[stc.length - 1]) {
          stc.pop();
          answer += 2;
        } else {
          stc.push(g);
        }
        break;
      }
    }
  }
  return answer;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
