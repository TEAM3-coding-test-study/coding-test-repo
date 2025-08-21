function solution(arr, target) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (i + j === target) return true;
    }
  }
  return false;
}

console.log(solution([2, 3, 5, 9], 10));

// O(N^2)
