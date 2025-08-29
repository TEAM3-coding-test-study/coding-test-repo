function solution(strings, n) {
  strings.sort();
  return strings.sort((a, b) => a.charCodeAt(n) - b.charCodeAt(n));
}

console.log(solution(["sun", "bed", "car"], 1));
console.log(solution(["abce", "abcd", "cdx"], 2));
