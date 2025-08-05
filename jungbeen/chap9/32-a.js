class Node {
  left = null;
  right = null;
  x = null;
  y = null;
  value = null;
  constructor(x, y, val) {
    this.x = x;
    this.y = y;
    this.value = val;
  }
}

class Tree {
  root = null;
}

function getPre(n) {
  if (n.left === null) {
    if (n.right === null) {
      return [n.value];
    } else {
      return [n.value, ...getPre(n.right)];
    }
  } else {
    if (n.right === null) {
      return [n.value, ...getPre(n.left)];
    } else {
      return [n.value, ...getPre(n.left), ...getPre(n.right)];
    }
  }
}

function getPost(n) {
  if (n.left === null) {
    if (n.right === null) {
      return [n.value];
    } else {
      return [...getPost(n.right), n.value];
    }
  } else {
    if (n.right === null) {
      return [...getPost(n.left), n.value];
    } else {
      return [...getPost(n.left), ...getPost(n.right), n.value];
    }
  }
}

function solution(nodeinfo) {
  var answer = [];
  const t = new Tree();

  let idxArr = nodeinfo.map((item, i) => [...item, i + 1]);
  idxArr.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : b[1] - a[1]));
  const root = new Node(...idxArr[0]);
  t.root = root;
  let cur = root;
  for (let i = 1; i < idxArr.length; i++) {
    cur = root;
    while (cur !== null) {
      if (idxArr[i][0] < cur.x) {
        if (!cur.left) {
          cur.left = new Node(...idxArr[i]);
          break;
        }
        cur = cur.left;
      } else {
        if (!cur.right) {
          cur.right = new Node(...idxArr[i]);
          break;
        }
        cur = cur.right;
      }
    }
  }

  answer.push(getPre(t.root));
  answer.push(getPost(t.root));

  return answer;
}

console.log(
  solution([
    [5, 3],
    [11, 5],
    [13, 3],
    [3, 5],
    [6, 1],
    [1, 3],
    [8, 6],
    [7, 2],
    [2, 2],
  ])
);
