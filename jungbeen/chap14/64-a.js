function solution(n) {
  let cnt = 1;
  let flag = 0;
  let iter = n - 1;
  const arr = Array.from({ length: n }, () => Array(n).fill(0));
  let x = 0;
  let y = 0;
  let turn = 0;

  while (cnt <= n * n) {
    arr[y][x] = cnt;
    iter--;

    if (flag % 4 === 0) x++;
    else if (flag % 4 === 1) y++;
    else if (flag % 4 === 2) x--;
    else if (flag % 4 === 3) y--;

    if (iter === 0) {
      flag++;
      if (!(flag % 4)) {
        turn++;
        y++;
        x++;
      }
      iter = n - 1 - turn * 2;
    }
    cnt++;
  }
  return arr;
}

// console.log(solution(5));
console.log(solution(9));

// n^2 = (n-1)*4 + (n - 3) * 4 + 1
// 3 3 3 3 1 1 1 1
// 5 5 5 5 3 3 3 3 1 1 1 1
// 28 20 12 4

// 1*4 + 3*4 + ... + (2n-1)*4 = 4n^2 = (2n)^2
// 2*4 + 4*4 + ... + 2n*4 = 4n^2 + 4n = (2n+1)^2 - 1
