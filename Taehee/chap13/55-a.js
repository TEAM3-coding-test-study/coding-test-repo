function solution(arr1, arr2) {
  let first = 0;
  let second = 0;
  const answer = [];

  while (true) {
    if (arr1[first] < arr2[second]) {
      answer.push(arr1[first]);
      first++;
    } else {
      answer.push(arr2[second]);
      second++;
    }
    if (first === arr1.length) {
      answer.push(...arr2.slice(second));
      break;
    } else if (second === arr2.length) {
      answer.push(...arr1.slice(first));
      break;
    }
  }

  return answer;
}

console.log(solution([1, 3, 5], [2, 4, 6]));
console.log(solution([1, 2, 3], [4, 5, 6]));
console.log(solution([2, 6, 7, 11], [4, 5, 10]));
