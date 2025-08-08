function union(num1, num2, t) {
  const root1 = find(num1, t);
  const root2 = find(num2, t);
  if (root1 === root2) return true;
  else {
    root1 > root2 ? (t[root2] = root1) : (t[root1] = root2);
    return false;
  }
}

function find(num, t) {
  while (t[num] !== num) {
    num = t[num];
  }
  return num;
}

function solution(k, operations) {
  const tree = [...new Array(k)].map((_, i) => i);
  let answer = k;
  for (let i of operations) {
    if (i[0] === "u") {
      union(i[1], i[2], tree) ? answer++ : answer--;
    } else {
      find(i[1], tree);
    }
  }
  return answer;
}

console.log(
  solution(3, [
    ["u", 0, 1],
    ["u", 1, 2],
    ["f", 2],
  ])
);
console.log(
  solution(4, [
    ["u", 0, 1],
    ["u", 2, 3],
    ["f", 0],
  ])
);
