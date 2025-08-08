function solution(nums) {
    const spc = new Set(nums);
    return Math.min(nums.length / 2, spc.size);
}