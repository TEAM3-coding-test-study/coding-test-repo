const target = 6;
const arr = [1, 2, 3, 4, 8];

const target2 = 10;
const arr2 = [2, 3, 5, 9];

const solution = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return true;
      }
    }
  }
  return false;
};

console.log(solution(arr2, target2));
