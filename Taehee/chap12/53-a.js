function solution(board, aloc, bloc) {
  const R = board.length;
  const C = board[0].length;

  const idx = (r, c) => r * C + c;

  let initMask = 0;
  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      if (board[r][c]) initMask |= 1 << idx(r, c);
    }
  }

  const DIRS = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const memo = new Map();

  function play(turnA, ar, ac, br, bc, mask) {
    const key = `${turnA ? 1 : 0}:${mask}:${ar},${ac}:${br},${bc}`;
    if (memo.has(key)) return memo.get(key);

    const cr = turnA ? ar : br;
    const cc = turnA ? ac : bc;
    const bit = 1 << idx(cr, cc);

    if ((mask & bit) === 0) {
      const lose = { win: false, moves: 0 };
      memo.set(key, lose);
      return lose;
    }

    let canWin = false;
    let bestWinMoves = Infinity;
    let bestLoseMoves = 0;
    const nextMask = mask & ~bit;

    for (const [dr, dc] of DIRS) {
      const nr = cr + dr,
        nc = cc + dc;
      if (nr < 0 || nr >= R || nc < 0 || nc >= C) continue;
      const nbit = 1 << idx(nr, nc);
      if ((nextMask & nbit) === 0) continue;
      let nar = ar,
        nac = ac,
        nbr = br,
        nbc = bc;
      if (turnA) {
        nar = nr;
        nac = nc;
      } else {
        nbr = nr;
        nbc = nc;
      }

      const res = play(!turnA, nar, nac, nbr, nbc, nextMask);

      if (!res.win) {
        canWin = true;
        bestWinMoves = Math.min(bestWinMoves, res.moves + 1);
      } else {
        bestLoseMoves = Math.max(bestLoseMoves, res.moves + 1);
      }
    }

    const ans = canWin
      ? { win: true, moves: bestWinMoves }
      : { win: false, moves: bestLoseMoves };

    memo.set(key, ans);
    return ans;
  }

  return play(true, aloc[0], aloc[1], bloc[0], bloc[1], initMask).moves;
}
