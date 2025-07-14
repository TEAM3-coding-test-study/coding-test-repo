function solution(board, moves) {
  var answer = 0;

  const stack = [];
  let top = -1;

  for (let i = 0; i < moves.length; i++) {
    //크레인 이동
    //moves[i] = 크레인이 내려간 세로 줄 번호. (1부터임!!)
    //board[a][b] => a는 보드판 깊이, b는 세로 열 번호
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] !== 0) {
        if (stack[top] === board[j][moves[i] - 1]) {
          stack.pop();
          answer += 2;
          top--;
        } else {
          stack.push(board[j][moves[i] - 1]);
          top++;
        }

        board[j][moves[i] - 1] = 0;
        break;
      }
    }
  }

  return answer;
}
