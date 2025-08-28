function solution(n) {
  var arr = n.toString().split("");
  arr.sort((a, b) => {
    return b - a;
  });

  return Number(arr.join(""));
}
