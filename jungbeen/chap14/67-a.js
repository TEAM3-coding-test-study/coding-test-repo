function solution(brown, yellow) {
  const total = brown + yellow;
  const xplusy = (total + 4 - yellow) / 2;

  const ans = (xplusy + Math.sqrt(xplusy * xplusy - 4 * total)) / 2;

  return [ans, total / ans];
}

console.log(solution(10, 2));

// x * y = br + ye
// (x - 2)(y - 2) = ye
