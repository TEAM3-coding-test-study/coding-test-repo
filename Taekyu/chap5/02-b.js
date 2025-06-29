const arr = [10, 11, 23, 23, 23, 4, 4, 100, 6];

function solution(arr) {
  const uniqueArr = [...new Set(arr)];
  uniqueArr.sort((a, b) => b - a);
  return uniqueArr;
}

console.log(solution(arr));
