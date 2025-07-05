const input = "baabaa";

const solution = (input) => {
  for (let i = 1; i < input.length; i++) {
    const currentChar = input[i];
    const prevChar = input[i - 1];
    // console.log("prev: ", prevChar, "cur: ", currentChar);
    if (currentChar === prevChar) {
      input = input.substr(0, i - 1) + input.substr(i + 1);
      //   console.log("input:", input);
      if (i === 1) {
        i = 1;
      } else {
        i = i - 2;
      }
    }
  }
  if (input.length === 0) {
    return 1;
  } else return 0;
};

console.log(solution(input));
