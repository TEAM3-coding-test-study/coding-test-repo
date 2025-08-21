class Node {
  left = null;
  right = null;
  value = 0;
  constructor(val) {
    this.value = val;
  }
}

class Tree {
  root = null;
}

function solution(lst, search) {
  const t = new Tree();
  const n = new Node(lst[0]);
  t.root = n;
  lst = lst.slice(1);

  const answer = [];

  for (let i of lst) {
    const newNode = new Node(i);
    let comp = t.root;
    while (true) {
      if (newNode.value < comp.value) {
        if (!comp.left) {
          comp.left = newNode;
          break;
        }
        comp = comp.left;
      } else {
        if (!comp.right) {
          comp.right = newNode;
          break;
        }
        comp = comp.right;
      }
    }
  }

  for (let i of search) {
    let comp = t.root;
    while (true) {
      if (i < comp.value) {
        if (!comp.left) {
          answer.push(false);
          break;
        }
        comp = comp.left;
      } else if (i > comp.value) {
        if (!comp.right) {
          answer.push(false);
          break;
        }
        comp = comp.right;
      } else {
        answer.push(true);
        break;
      }
    }
  }

  return answer;
}

// console.log(solution([5, 3, 8, 4, 2, 1, 7, 10], [1, 2, 5, 6]));
console.log(solution([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]));
