const solution = (participant, completion) => {
  const obj = {};

  // 참가자들의 이름을 해시테이블에 추가 (동명이인인 경우에 같은 키의 값을 증가시켜줌)
  for (const p of participant) {
    if (obj[p]) {
      obj[p] += 1;
    } else {
      obj[p] = 1;
    }
  }

  for (const c of completion) {
    obj[c] -= 1;
  }

  // 값이 0명보다 큰 경우가 완주하지 못한 사람의 이름임
  for (const key in obj) {
    if (obj[key] > 0) {
      return key;
    }
  }
};
