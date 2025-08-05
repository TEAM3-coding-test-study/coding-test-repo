function solution(info, edges) {
  const graph = Array.from({ length: info.length }, () => []);

  // 트리 연결 정보 구성
  for (const [from, to] of edges) {
    graph[from].push(to);
  }

  let maxSheep = 0;

  function dfs(current, sheep, wolf, nextNodes) {
    if (info[current] === 0) sheep++;
    else wolf++;

    // 종료 조건: 늑대 수가 같거나 많아지는 경우
    if (wolf >= sheep) return;

    maxSheep = Math.max(maxSheep, sheep);

    // 현재 노드 기준 다음 방문 가능한 노드 리스트
    const next = [...nextNodes];
    // 현재 노드에서 갈 수 있는 자식 노드 추가
    for (const child of graph[current]) {
      next.push(child);
    }

    // 현재 노드는 제거 (이미 방문했으니까)
    const idx = next.indexOf(current);
    if (idx > -1) next.splice(idx, 1);

    for (const node of next) {
      dfs(node, sheep, wolf, next);
    }
  }

  dfs(0, 0, 0, [0]);

  return maxSheep;
}
