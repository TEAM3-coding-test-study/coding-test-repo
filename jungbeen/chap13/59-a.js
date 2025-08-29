function solution(numbers) {
  const str = Array.from(numbers, String);
  str.sort((a, b) => (a + b > b + a ? -1 : 1));

  return str[0] === "0" ? "0" : str.join("");
}

console.log(solution([0, 0, 0]));
console.log(solution([1000, 111, 110, 101, 100, 11, 10, 1, 0]));
