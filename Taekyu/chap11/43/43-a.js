const computers = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
];

const n = 3;

const solution = (n, computers) => {
  const stack = [];
  const visited = new Set();
  let count = 0;

  stack.push(0);

  while (stack.length !== 0) {
    const recent = stack.pop();

    if (!visited.has(recent)) {
      visited.add(recent);
    }

    console.log("visited:", visited);

    for (let i = n - 1; i >= 0; i--) {
      console.log("i: ", i);
      if (computers[recent][i] === 1 && !visited.has(i)) {
        stack.push(i);
      } else if (visited.has(i)) {
        // 사이클이 만들어진 경우
        console.log("cycle count");
      } else {
        // 자식 노드가 더는 없는 경우
        console.log("no child count");
      }
    }
  }

  return count;
};

console.log(solution(n, computers));
