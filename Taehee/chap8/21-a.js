function solution(want, number, discount) {
  let answer = 0;
  const obj = {};

  for (let n = 0; n < number.length; n++) {
    obj[want[n]] = number[n];
  }

  for (let i = 0; i <= discount.length - 10; i++) {
    const tempMap = { ...obj };
    let matched = true;

    for (let n = 0; n < 10; n++) {
      const item = discount[i + n];
      if (tempMap[item] !== undefined) {
        tempMap[item] -= 1;
        if (tempMap[item] < 0) {
          matched = false;
          break;
        }
      } else {
        matched = false;
        break;
      }
    }

    if (matched && Object.values(tempMap).every((v) => v === 0)) {
      answer++;
    }
  }

  return answer;
}
