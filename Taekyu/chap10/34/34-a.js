const nums = [3, 3, 3, 2, 2, 4];
const nums2 = [3, 3, 3, 2, 2, 2];
const nums3 = [1, 1, 1, 1, 1, 1];

const solution = (nums) => {
  const pickCount = nums.length / 2;
  const set = new Set(nums);

  if (set.size > pickCount) {
    return pickCount;
  } else {
    return set.size;
  }
};

console.log(solution(nums3));
