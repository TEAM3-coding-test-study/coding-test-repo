const tr1 = [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]];

const solution = (triangle) => {
  const curidx = [0, 0];
  let curSum = 0;
  for (let i = 0; i < triangle.length - 1; i++) {
    console.log(curidx);
    if (triangle[curidx[0] + 1][curidx[1]] > triangle[curidx[0] + 1][curidx[1] + 1]) {
      console.log("left");
      curidx[0] = curidx[0] + 1;
      curSum += triangle[curidx[0]][curidx[1]];
    } else {
      console.log("right");
      curidx[0] = curidx[0] + 1;
      curidx[1] = curidx[1] + 1;
      curSum += triangle[curidx[0]][curidx[1]];
    }
  }
  return curSum;
};

console.log(solution(tr1));
