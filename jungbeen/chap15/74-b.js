function solution(n) {
  let a = 1;
  let b = 2;

  for (let i = 2; i < n; i++) {
    const temp = b;
    b = (a + b) % 1000000007;
    a = temp;
  }

  return b;
}
