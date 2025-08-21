function solution(n, words) {
  const s = new Set();
  let prev = "";
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if ((prev && prev !== word[0]) || s.has(word)) {
      return [(i % n) + 1, Math.floor(i / n) + 1];
    }
    s.add(word);
    prev = word.slice(-1);
  }

  return [0, 0];
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
