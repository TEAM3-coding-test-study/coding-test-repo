// 계수 정렬을 안쓰고 그냥 기본 메서드인 sort를 이용하면 되기는 함
const solution = (s) => {
  const strArr = s.split("");
  //   const freqMap = new Map();
  //   strArr.forEach((v, _) => {
  //     freqMap.set(v, (freqMap.get(v) || 0) + 1);
  //   });

  const sortedArr = strArr.sort().join("");
  return sortedArr;
};

console.log(solution("hello"));
