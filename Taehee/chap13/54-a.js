function solution(s) {
  const counts = new Array(26).fill(0);
  const answer = [];

  for (const char of s) {
    counts[char.charCodeAt(0) - "a".charCodeAt(0)]++;
  }

  for (var i = 0; i < 26; i++) {
    for (var n = counts[i]; n > 0; n--) {
      answer.push(String.fromCharCode(i + "a".charCodeAt(0)));
    }
  }

  return answer.join("");
}

console.log(solution("hello"));
console.log(solution("algorithm"));
