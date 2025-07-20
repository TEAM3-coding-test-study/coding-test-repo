function solution(n, k) {
  let cur = 0;
  const arr = new Array(n).fill().map((_, i) => i + 1);
  while (arr.length > 1) {
    cur = (cur + k - 1) % arr.length;
    arr.splice(cur, 1);
  }
  return arr[0];
}

console.log(solution(5, 2));
console.log(solution(7, 3));
console.log(solution(10, 1));
