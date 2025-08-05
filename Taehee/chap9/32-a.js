function solution(nodeinfo) {
  const nodes = nodeinfo.map((pos, idx) => [...pos, idx + 1]);

  nodes.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return b[1] - a[1];
  });

  class TreeNode {
    constructor(x, y, idx) {
      this.x = x;
      this.y = y;
      this.idx = idx;
      this.left = null;
      this.right = null;
    }

    insert(node) {
      if (node.x < this.x) {
        if (this.left) this.left.insert(node);
        else this.left = node;
      } else {
        if (this.right) this.right.insert(node);
        else this.right = node;
      }
    }
  }

  const root = new TreeNode(...nodes[0]);
  for (let i = 1; i < nodes.length; i++) {
    root.insert(new TreeNode(...nodes[i]));
  }

  const preorder = [];
  function dfsPre(node) {
    if (!node) return;
    preorder.push(node.idx);
    dfsPre(node.left);
    dfsPre(node.right);
  }

  const postorder = [];
  function dfsPost(node) {
    if (!node) return;
    dfsPost(node.left);
    dfsPost(node.right);
    postorder.push(node.idx);
  }

  dfsPre(root);
  dfsPost(root);

  return [preorder, postorder];
}
