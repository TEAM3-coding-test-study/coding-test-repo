function solution(nums) {
  const answer = new Set(nums);
  if (nums.length / 2 < answer.size) {
    return nums.length / 2;
  } else {
    return answer.size;
  }
}
