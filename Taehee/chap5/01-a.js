function solution(arr) {
  arr.sort((a, b) => a - b);
  return arr;
}

console.log(solution([1, -5, 2, 4, 3]));
console.log(solution([2, 1, 1, 3, 2, 5, 4]));
console.log(solution([6, 1, 7]));
console.log(solution([6, -1, 7, 1, -5, 100]));
