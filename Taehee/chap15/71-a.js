function solution(nums) {
  const m = nums.length;
  let array = new Array(m).fill(1);

  for (let i = 1; i < m; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        array[i] = Math.max(array[i], array[j] + 1);
      }
    }
  }
  return Math.max(...array);
}

console.log(solution([1, 4, 2, 3, 1, 5, 7, 3]));
console.log(solution([3, 2, 1]));
