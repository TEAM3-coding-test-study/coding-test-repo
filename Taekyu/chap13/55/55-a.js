const solution = (arr1, arr2) => {
  let pt1 = 0;
  let pt2 = 0;
  const mergedArr = new Array();

  while (mergedArr.length < arr1.length + arr2.length) {
    if (arr1[pt1] < arr2[pt2]) {
      mergedArr.push(arr1[pt1]);
      pt1++;
    } else {
      mergedArr.push(arr2[pt2]);
      pt2++;
    }
  }
  return mergedArr;
};

console.log(solution([1, 3, 5], [2, 4, 6]));
