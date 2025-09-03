const getBinary = (len) => {
  let resultStr = "";
  while (len > 0) {
    resultStr += len % 2;
    len = Math.floor(len / 2);
  }
  return resultStr.split("").reverse().join("");
};

const solution = (s) => {
  let erasedZeroCount = 0;
  let transitionCount = 0;

  while (s !== "1") {
    const nonZeroStr = s.replaceAll("0", "");
    erasedZeroCount += s.length - nonZeroStr.length;
    const len = nonZeroStr.length;
    s = getBinary(len);
    // console.log(s);
    transitionCount++;
  }

  return [transitionCount, erasedZeroCount];
};

console.log(solution("110010101001"));
