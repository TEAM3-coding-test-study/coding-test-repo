const arr1 = [
  [1, 4],
  [3, 2],
  [4, 1],
];
const arr2 = [
  [3, 3],
  [3, 3],
];

const solution = (arr1, arr2) => {
  const resultArr = [];
  for (let i = 0; i < arr1.length; i++) {
    let tempArr = [];
    for (let k = 0; k < arr2[0].length; k++) {
      let temp = 0;
      for (let j = 0; j < arr1[i].length; j++) {
        // console.log(arr1[i][j], arr2[j][k]);
        temp += arr1[i][j] * arr2[j][k];
        // console.log("temp: ", temp);
      }
      tempArr.push(temp);
    }

    resultArr.push(tempArr);
  }
  return resultArr;
};

console.log(solution(arr1, arr2));
