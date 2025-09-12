function solution(n) {
  let prev1 = 0;
  let prev2 = 1;

  for (let i = 1; i < n; i++) {
    let temp = (prev2 + prev1) % 1234567;
    prev1 = prev2;
    prev2 = temp;
  }
  return prev2;
}

console.log(solution(5));
