function solution(nodes) {
  let tree = new Array(nodes.length + 1).fill(0);
  let preorder = [];
  let inorder = [];
  let postorder = [];

  for (let i = 1; i <= nodes.length; i++) {
    tree[i] = nodes[i - 1];
  }

  function traversePreorder(node) {
    if (!tree[node]) return;
    preorder.push(tree[node]);
    traversePreorder(node * 2);
    traversePreorder(node * 2 + 1);
  }

  function traverseInorder(node) {
    if (!tree[node]) return;
    traverseInorder(node * 2);
    inorder.push(tree[node]);
    traverseInorder(node * 2 + 1);
  }

  function traversePostorder(node) {
    if (!tree[node]) return;
    traversePostorder(node * 2);
    traversePostorder(node * 2 + 1);
    postorder.push(tree[node]);
  }

  traversePreorder(1);
  traverseInorder(1);
  traversePostorder(1);

  return [preorder.join(" "), inorder.join(" "), postorder.join(" ")];
}

console.log(solution([1, 2, 3, 4, 5, 6, 7]));
