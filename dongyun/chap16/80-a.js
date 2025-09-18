function solution(amount) {
  let leftAmount = amount;
  let hunderedCnt = 0;
  let fifthCnt = 0;
  let tenthCnt = 0;
  let singleCnt = 0;

  while (leftAmount >= 100) {
    leftAmount -= 100;
    hunderedCnt += 1;
  }

  while (leftAmount >= 50) {
    leftAmount -= 50;
    fifthCnt += 1;
  }

  while (leftAmount >= 10) {
    leftAmount -= 10;
    tenthCnt += 1;
  }

  while (leftAmount >= 1) {
    leftAmount -= 1;
    singleCnt += 1;
  }

  return [
    ...new Array(hunderedCnt).fill(100),
    ...new Array(fifthCnt).fill(50),
    ...new Array(tenthCnt).fill(10),
    ...new Array(singleCnt).fill(1),
  ];
}

console.log(solution(123));
console.log(solution(350));
