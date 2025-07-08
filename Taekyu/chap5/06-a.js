const stages = [1, 2];

const solution = (N, stages) => {
  const countNumArray = new Array(N + 1).fill(0); // 현재 해당 단계에 존재하는 도전자를 표시하는 배열
  const totalUserNum = stages.length;
  for (let i = 1; i <= N + 1; i++) {
    for (let j = 0; j < stages.length; j++) {
      if (stages[j] === i) countNumArray[i - 1]++;
    }
  }

  const failRateArr = new Array(N).fill(0); // 각 스테이지의 실패율을 담는 배열
  failRateArr[0] = countNumArray[0] / totalUserNum;
  for (let k = 1; k < countNumArray.length - 1; k++) {
    const remaindersArray = countNumArray.slice(0, k);
    const challengerNum = totalUserNum - remaindersArray.reduce((acc, cur) => acc + cur);
    if (challengerNum === 0) {
      failRateArr[k] = 0;
      continue;
    }
    failRateArr[k] = countNumArray[k] / challengerNum;
  }
  console.log(failRateArr);

  const sortedFailRateArr = [...new Set([...failRateArr].sort((a, b) => b - a))];
  let sortedStageArr = []; // 실패율의 내림차순별로 스테이지 단계를 담는 배열

  for (let i = 0; i < sortedFailRateArr.length; i++) {
    for (let j = 0; j < failRateArr.length; j++) {
      if (sortedFailRateArr[i] === failRateArr[j]) {
        sortedStageArr.push(j + 1);
        continue;
      }
    }
  }

  return sortedStageArr;
};

console.log(solution(3, stages));
