function solution(n) {
  var arr = new Array(10).fill(0);
  let answer = "";

  while (n > 0) {
    arr[n % 10]++;
    n = Math.floor(n / 10);
  }

  for (var i = 9; i >= 0; i--) {
    while (arr[i] > 0) {
      answer += i;
      arr[i]--;
    }
  }

  return Number(answer);
}
