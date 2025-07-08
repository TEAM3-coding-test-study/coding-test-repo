const numbers = [13, 24, 45, 23, 5, 11];

const solution = (numbers) => {
  const addedArr = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      addedArr.push(numbers[i] + numbers[j]);
    }
  }
  const uniqueArr = [...new Set(addedArr)];
  uniqueArr.sort((a, b) => a - b);
  return uniqueArr;
};

console.log(solution(numbers));
