const n = 3;
const words = ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"];

const n2 = 5;
const words2 = [
  "hello",
  "observe",
  "effect",
  "take",
  "either",
  "recognize",
  "encourage",
  "ensure",
  "establish",
  "hang",
  "gather",
  "refer",
  "reference",
  "estimate",
  "executive",
];

const n3 = 2;
const words3 = ["hello", "one", "even", "never", "now", "world", "draw"];

const solution = (n, words) => {
  const wordsArr = [];
  const wordsHistory = [];
  for (let i = 0; i < words.length; i++) {
    if (!wordsArr[i % n]) {
      wordsArr[i % n] = [];
      wordsArr[i % n].push(words[i]);
    } else {
      wordsArr[i % n].push(words[i]);
    }
  }

  console.log(wordsArr);

  for (let i = 0; i < Math.floor(words.length / n); i++) {
    for (let j = 0; j < n; j++) {
      //   console.log(wordsArr[j][i]);
      // 여기서는 일단 이전에 언급된 단어들과 현재 단어가 중복되는지 확인
      if (wordsHistory.includes(wordsArr[j][i])) {
        return [j + 1, i + 1];
      }
      // 직전단어의 끝말을 이었는지 확인
      if (
        wordsHistory.length !== 0 &&
        wordsHistory[wordsHistory.length - 1].at(-1) !== wordsArr[j][i][0]
      ) {
        return [j + 1, i + 1];
      }
      wordsHistory.push(wordsArr[j][i]);
    }
  }

  return [0, 0];
};

console.log(solution(n3, words3));
