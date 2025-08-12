const graph = [
  ["A", "B"],
  ["B", "C"],
  ["C", "D"],
  ["D", "E"],
];

const start = "A";

const graph2 = [
  ["A", "B"],
  ["A", "C"],
  ["B", "D"],
  ["B", "E"],
  ["C", "F"],
  ["E", "F"],
];

const start2 = "A";

const solution = (graph, start) => {
  const stack = [];
  const visited = [];

  stack.push(start);

  while (true) {
    if (stack.length === 0) break;

    const recent = stack.pop();

    if (!visited.includes(recent)) {
      visited.push(recent);
    }

    // graph.reverse().forEach((item, _) => {
    //   if (item[0] === visited[visited.length - 1] && !visited.includes(item[1])) {
    //     stack.push(item[1]);
    //   }
    // });
    for (let i = graph.length - 1; i >= 0; i--) {
      if (graph[i][0] === visited[visited.length - 1] && !visited.includes(graph[i][1])) {
        stack.push(graph[i][1]);
      }
    }
    console.log(stack);
  }

  return visited;
};

console.log(solution(graph2, start2));
