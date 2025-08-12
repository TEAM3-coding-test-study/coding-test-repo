function solution(n, words) {
  var answer = [];
  const h = new Map();
  let firstChar = "";
  let lastChar = "";

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    firstChar = word[0];
    if (lastChar && firstChar !== lastChar) {
      answer.push((i % n) + 1);
      answer.push(Math.floor(i / n) + 1);
      break;
    }

    if (h.has(firstChar)) {
      let arr = h.get(firstChar);
      if (arr.includes(word)) {
        answer.push((i % n) + 1);
        answer.push(Math.floor(i / n) + 1);
        break;
      } else {
        arr.push(word);
      }
    } else {
      h.set(firstChar, [word]);
    }
    lastChar = word[word.length - 1];
  }

  if (!answer.length) answer = [0, 0];

  return answer;
}

console.log(
  solution(3, [
    "tank",
    "kick",
    "know",
    "wheel",
    "land",
    "dream",
    "mother",
    "robot",
    "tank",
  ])
);
console.log(
  solution(5, [
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
  ])
);
console.log(
  solution(2, ["hello", "one", "even", "never", "now", "world", "draw"])
);
