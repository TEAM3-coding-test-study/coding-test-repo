function union(num1, num2, t) {
  num1 > num2 ? (t[num1] = num2) : (t[num2] = num1);
}

function find(num, t) {
  while (t[num] !== num) {
    num = t[num];
  }
  return num;
}

function solution(n, costs) {
  var answer = 0;
  let t = [...Array(n)].map((_, i) => i);
  let totalEdge = 0;

  costs.sort((a, b) => a[2] - b[2]);

  for (let c of costs) {
    if (totalEdge === n - 1) break;

    const root1 = find(c[0], t);
    const root2 = find(c[1], t);
    if (root1 !== root2) {
      union(root1, root2, t);
      totalEdge++;
      answer += c[2];
    }
  }

  return answer;
}

console.log(
  solution(4, [
    [0, 1, 1],
    [0, 2, 2],
    [1, 2, 5],
    [1, 3, 1],
    [2, 3, 8],
  ])
);
