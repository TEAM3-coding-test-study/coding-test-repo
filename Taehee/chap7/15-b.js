function solution(n, k) {
  let temp = 0;
  let arr = new Array(n).fill().map((_, i) => i + 1);
  while (arr.length > 1) {
    for (var i = 0; i < k - 1; i++) {
      temp = arr.shift();
      arr.push(temp);
    }
    arr.shift();
  }
  return arr[0];
}

console.log(solution(5, 2));
console.log(solution(7, 3));
console.log(solution(10, 1));
