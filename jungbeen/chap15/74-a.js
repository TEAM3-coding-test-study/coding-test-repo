function solution(n) {
  if (n === 1 || n === 2) return n;

  let ans1 = 1;
  let ans2 = 2;

  for (let i = 2; i < n; i++) {
    let temp = (ans1 + ans2) % 1000000007;
    ans1 = ans2;
    ans2 = temp;
  }

  return ans2;
}

console.log(solution(60000));
