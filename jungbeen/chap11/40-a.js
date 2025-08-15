function solution(graph, start) {
  const nodes = Object.keys(graph);
  const info = {};
  let cur = start;
  const mindist = {};
  const backtrack = {};

  for (let n of nodes) {
    info[n] = [-1, ""];
  }
  info[start][0] = 0;
  info[start][1] = start;

  for (let i = 0; i < nodes.length; i++) {
    let ent = Object.entries(graph[cur]);
    if (ent.length === 0) continue;

    ent.sort((a, b) => a[1] - b[1]);
    ent.forEach(([v, w]) => {
      if (info[v][0] === -1 || info[v][0] > info[cur][0] + w) {
        info[v][0] = info[cur][0] + w;
        info[v][1] = cur;
      }
    });

    cur = ent[0][0];
  }

  for (let n of nodes) {
    mindist[n] = info[n][0];
    if (n === start) {
      backtrack[n] = [n];
      continue;
    }
    let temp = [];
    temp.push(n);
    let bt = n;
    while (bt !== start) {
      bt = info[bt][1];
      temp.push(bt);
    }
    backtrack[n] = temp.reverse();
  }

  return [mindist, backtrack];
}

console.log(solution({ A: { B: 9, C: 3 }, B: { A: 5 }, C: { B: 1 } }, "A"));
console.log(solution({ A: { B: 1 }, B: { C: 5 }, C: { D: 1 }, D: {} }, "A"));
