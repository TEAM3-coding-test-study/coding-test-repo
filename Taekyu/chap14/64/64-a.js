const moveRight = (std, arr, k, n) => {
  for (let i = 0; i < n; i++) {
    arr[0][i] = k;
    k++;
    console.log("mR");
    console.log(arr);
  }
};

const moveDown = (arr, k, n) => {
  for (let j = 0; j < n; j++) {
    arr[j][n - 1] = k;
    k++;
    console.log("mD");
    console.log(arr);
  }
};

const moveLeft = (arr, k, n) => {
  for (let i = 0; i < n; i++) {
    if (arr[n - 1][n - 1 - i]) break;
    arr[n - 1][n - 1 - i] = k;
    k++;
    console.log("mL");
    console.log(arr);
  }
};

const moveUp = (arr, k, n) => {
  for (let j = 0; j < n; j++) {
    if (arr[n - 1 - j][0]) break;
    arr[n - 1 - j][0] = k;
    k++;
    console.log("mU");
    console.log(arr);
  }
};

const solution = (n) => {
  const arr = Array.from({ length: n }, (v) => Array(n));
  let k = 1;
  while (k <= 9) {
    moveRight(arr, k, n);
    moveDown(arr, k, n);
    moveLeft(arr, k, n);
    moveUp(arr, k, n);
  }
  return arr;
};

solution(3);
