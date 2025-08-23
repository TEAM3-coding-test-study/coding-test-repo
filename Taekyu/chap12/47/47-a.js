class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// 트리 구축 함수
const makeTree = (N, count, node) => {
  if (count > N) return;
  node.left = new Node(node.value + count);
  node.right = new Node(node.value);
  //   console.log(node);
  //   console.log("count:", count);
  makeTree(N, count + 1, node.left);
  makeTree(N, count + 1, node.right);
};

// 트리를 순회하며, 합이 10이 되는 조합을 찾음 (백트랙킹 유망함수 로직도 포함되어있음)
const searchSum = (node, answerArr, curPick, count) => {
  const sum = count + node.value;
  console.log("sum: ", sum);
  console.log("node: ", node.value);
  console.log("count:", count);
  console.log("ansArr:", answerArr);
  console.log("curPick", curPick);
  // 유망 함수
  if (sum === 10) {
    console.log("sum is 10");
    answerArr.push([...curPick, count]);
    return;
  }
  if (!node.left || !node.right || sum > 10) {
    console.log("out of range");
    return;
  }
  //
  searchSum(node.left, answerArr, [...curPick, count], count + 1);
  searchSum(node.right, answerArr, [...curPick], count + 1);
};

const solution = (N) => {
  const root = new Node(0);
  const answerArr = new Array();
  makeTree(N, 1, root);
  searchSum(root, answerArr, [], 1);
  return answerArr;
};

console.log(solution(7));
