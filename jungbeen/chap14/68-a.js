function solution(n) {
  var ans = 0;

  while (n > 1) {
    if (n % 2) {
      n--;
      ans++;
    } else {
      n /= 2;
    }
  }

  return ans + 1;
}

console.log(solution(1));
