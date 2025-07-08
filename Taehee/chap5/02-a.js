function solution(arr) {
  const setArray = [...new Set(arr)];
  setArray.sort((a, b) => b - a);
  return setArray;
}

console.log(solution([4, 2, 2, 1, 3, 4]));
console.log(solution([2, 1, 1, 3, 2, 5, 4]));
