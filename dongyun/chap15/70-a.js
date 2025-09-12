function solution(str1, str2) {
  const lcs = [];
  lcs["0,0"] = 0;

  const makeKeyForm = (i, j) => {
    return `${i},${j}`;
  };

  const makeNumform = (key) => {
    const numArray = key.split(",");
    return [Number(numArray[0]), Number(numArray[1])];
  };

  const getLcs = (i, j) => {
    if (i === 0 || j === 0) {
      lcs[makeKeyForm(i, j)] = 0;
    }
    if (str1[i] === str2[j]) {
      lcs[makeKeyForm(i, j)] = lcs[makeKeyForm(i - 1, j - 1)] + 1;
    } else {
      lcs[makeKeyForm(i, j)] = Math.max(
        lcs[makeKeyForm(i - 1, j)],
        lcs[makeKeyForm(i, j - 1)]
      );
    }
  };

  for (let i = 1; i < str1.length; i++) {
    for (let j = 1; j < str2.length; j++) {
      if (str1[i] === str2[j]) {
        lcs[makeKeyForm(i, j)] = lcs[makeKeyForm(i - 1, j - 1)] + 1;
      } else {
        lcs[makeKeyForm(i, j)] = Math.max(
          lcs[makeKeyForm(i - 1, j)],
          lcs[makeKeyForm(i, j - 1)]
        );
      }
    }
  }

  return lcs[makeKeyForm(str1.length, str2.length)];
}

console.log(solution("ABCBDAB", "BDCAB")); // 4
// console.log(solution("AGGTAB","GXTXAYB")) // 4
