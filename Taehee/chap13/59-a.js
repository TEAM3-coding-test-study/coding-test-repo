function solution(numbers) {
  var answer = "";
  numbers.sort((a, b) => {
    let A = String(a);
    let B = String(b);
    return A + B > B + A ? -1 : 1;
  });
  if (numbers[0] === 0) return "0";
  return numbers.join("");
}
