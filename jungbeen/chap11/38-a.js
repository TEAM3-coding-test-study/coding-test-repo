function solution(graph, start) {
  const hash = new Map();
  const stc = [];
  const answer = [];
  const visited = {};
  for (let e of graph) {
    if (hash.has(e[0])) {
      hash.get(e[0]).push(e[1]);
    } else {
      hash.set(e[0], [e[1]]);
      visited[e[0]] = false;
    }
  }
  stc.push(start);

  let cur;
  while (stc.length > 0) {
    cur = stc.pop();
    if (!visited[cur]) {
      visited[cur] = true;
      answer.push(cur);
    }

    if (!hash.has(cur)) continue;

    let adjc = hash.get(cur).reverse();
    for (let i of adjc) {
      stc.push(i);
    }
  }
  return answer;
}

console.log(
  solution(
    [
      ["A", "B"],
      ["B", "C"],
      ["C", "D"],
      ["D", "E"],
    ],
    "A"
  )
);
console.log(
  solution(
    [
      ["A", "B"],
      ["A", "C"],
      ["B", "D"],
      ["B", "E"],
      ["C", "F"],
      ["E", "F"],
    ],
    "A"
  )
);
