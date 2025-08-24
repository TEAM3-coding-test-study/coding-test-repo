function solution(n, wires) {
  const adj = Array.from({ length: n + 1 }, () => []);
  for (const [a, b] of wires) {
    adj[a].push(b);
    adj[b].push(a);
  }

  let answer = Infinity;

  for (const [cutA, cutB] of wires) {
    const visited = Array(n + 1).fill(false);
    let cnt = 0;

    const q = [cutA];
    visited[cutA] = true;

    while (q.length) {
      const v = q.shift();
      cnt++;

      for (const nx of adj[v]) {
        if ((v === cutA && nx === cutB) || (v === cutB && nx === cutA))
          continue;
        if (!visited[nx]) {
          visited[nx] = true;
          q.push(nx);
        }
      }
    }

    const diff = Math.abs(n - 2 * cnt);
    if (diff < answer) answer = diff;
  }

  return answer;
}
