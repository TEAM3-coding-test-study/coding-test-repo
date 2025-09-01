const solution = (s) => {
  const strArr = s.split("");
  const freqMap = new Map();
  strArr.forEach((v, _) => {
    freqMap.set(v, (freqMap.get(v) || 0) + 1);
  });

  let sortedStr = "";
  for (let i = 0; i < 26; i++) {
    const targetChar = String.fromCharCode(i + "a".charCodeAt(0));
    sortedStr += targetChar.repeat(freqMap.has(targetChar) ? freqMap.get(targetChar) : 0);
  }
  return sortedStr;
};

console.log(solution("hello"));
