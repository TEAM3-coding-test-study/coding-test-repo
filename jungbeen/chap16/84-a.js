function solution(k, tangerine) {
  var answer = 0;
  let diff = tangerine.length - k;
  const hash = new Map();
  let deletedIdx = 0;
  for (let i of tangerine) hash.set(i, (hash.get(i) ?? 0) + 1);

  const many = Array.from(hash.values());
  many.sort((a, b) => a - b);

  for (deletedIdx = 0; deletedIdx < many.length; deletedIdx++) {
    if (many[deletedIdx] <= diff) diff -= many[deletedIdx];
    else break;
  }

  return many.length - deletedIdx;
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]));
