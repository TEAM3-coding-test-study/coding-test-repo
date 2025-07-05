arr1 = [
  [2, 3, 2],
  [4, 2, 4],
  [3, 1, 4],
];
arr2 = [
  [5, 4, 3],
  [2, 4, 1],
  [3, 1, 1],
];

function solution(arr1, arr2) {
  var answer = [];

  for (let i = 0; i < arr1.length; i++) {
    let tempArr = [];
    for (let j = 0; j < arr2[0].length; j++) {
      let res = 0;
      for (let k = 0; k < arr2.length; k++) {
        res += arr1[i][k] * arr2[k][j];
      }
      tempArr.push(res);
    }
    answer.push(tempArr);
  }
  return answer;
}

console.log(solution(arr1, arr2));
