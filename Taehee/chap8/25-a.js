function solution(orders, course) {
  const answer = [];
  const menuMap = {};

  for (const order of orders) {
    const items = order.split("").sort();
    for (const c of course) {
      const combis = getCombinations(items, c);
      for (const combi of combis) {
        const key = combi.join("");
        menuMap[key] = (menuMap[key] || 0) + 1;
      }
    }
  }

  for (const c of course) {
    const filtered = Object.entries(menuMap).filter(
      ([key, count]) => key.length === c && count >= 2
    );

    if (filtered.length === 0) continue;

    const maxCount = Math.max(...filtered.map(([_, cnt]) => cnt));

    filtered.forEach(([key, cnt]) => {
      if (cnt === maxCount) answer.push(key);
    });
  }

  return answer.sort();
}

function getCombinations(arr, selectNum) {
  const result = [];
  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combis = getCombinations(rest, selectNum - 1);
    const attached = combis.map((combi) => [fixed, ...combi]);
    result.push(...attached);
  });

  return result;
}
