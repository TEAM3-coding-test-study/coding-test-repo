function solution(participant, completion) {
  const obj = {};
  for (const str of participant) {
    if (obj[str]) {
      obj[str] += 1;
    } else {
      obj[str] = 1;
    }
  }

  for (const com of completion) {
    obj[com] -= 1;
  }

  for (const key in obj) {
    if (obj[key] > 0) {
      return key;
    }
  }
}
