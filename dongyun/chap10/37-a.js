function solution(n, costs) {
  var answer = 0;

  costs.sort((a, b) => a[2] - b[2]);
  const parent = [...new Array(n)].map((_, i) => i);

  const find = (parent, x) => {
    if (x > parent.length) return;
    if (x === parent[x]) return x;
    // 재귀 결과를 반환해야 함 + 경로 압축
    return (parent[x] = find(parent, parent[x]));
  };

  const union = (parent, x, y, cost) => {
    const xp = find(parent, x);
    const yp = find(parent, y);
    if (xp !== yp) {
      answer += cost;
      parent[xp] = parent[yp];
    }
  };

  for (const cost of costs) {
    const [island1, island2, bridgeCost] = cost;
    union(parent, island1, island2, bridgeCost);
  }

  return answer;
}
