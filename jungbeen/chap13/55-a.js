function solution(arr1, arr2) {
  let p1 = 0;
  let p2 = 0;
  let answer = [];

  while (p1 !== arr1.length && p2 !== arr2.length) {
    if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
    else answer.push(arr2[p2++]);
  }

  if (p1 !== arr1.length) answer = [...answer, ...arr1.slice(p1)];
  else if (p2 !== arr2.length) answer = [...answer, ...arr2.slice(p2)];

  return answer;
}

console.log(solution([1, 3, 5], [2, 4, 6]));
console.log(solution([1, 2, 3], [4, 5, 6]));
