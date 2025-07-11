function solution(board, moves) {
  var count = 0;
  const stack = [];
  var col = 0;

  for (var i = 0; i < moves.length; i++) {
    col = moves[i] - 1;
    for (var n = 0; n < board.length; n++) {
      if (board[n][col]) {
        if (stack[stack.length - 1] === board[n][col]) {
          stack.pop();
          count += 2;
        } else {
          stack.push(board[n][col]);
        }
        board[n][col] = 0;
        break;
      }
    }
  }
  return count;
}
