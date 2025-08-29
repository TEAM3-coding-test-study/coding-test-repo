function solution(n) {
  const arr = Array.from(String(n), Number);
  arr.sort((a, b) => b - a);
  return +arr.join("");
}

console.log(solution(118372));
