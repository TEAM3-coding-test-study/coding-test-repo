const makeTree = (N, tree) => {
  let level = 0;
  let temp = N;
  let nodeCount = 0;

  tree[0] = 1;

  while (temp >= 1) {
    temp = temp / 2;
    // console.log(temp);
    level++;
  }

  for (let i = 0; i < level; i++) {
    nodeCount += 2 ** i;
  }

  while (tree.length < nodeCount) {}
};

const solution = (N, A, B) => {
  const tree = [];
  makeTree(N, tree);
};

solution(8, 4, 7);
