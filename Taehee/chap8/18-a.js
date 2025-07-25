function init(arr, k) {
  const hashtable = new Array(k + 1).fill(0);
  for (const n of arr) {
    if (n <= k) {
      hashtable[n]++;
    }
  }
  return hashtable;
}

function solution(arr, target) {
  const hashtable = init(arr, target);
  for (const n of arr) {
    const goal = target - n;
    if (goal > 0 && goal <= target && goal !== n && hashtable[goal] > 0) {
      return true;
    }
  }
  return false;
}

console.log(solution([1, 2, 3, 4, 8], 6));
console.log(solution([2, 3, 5, 9], 10));
