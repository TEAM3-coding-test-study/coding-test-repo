function solution(lst, searchList) {
  if (lst.length === 0) return searchList.map(() => false);

  let tree = { val: lst[0], left: null, right: null };

  function insert(root, val) {
    if (val < root.val) {
      if (root.left === null) root.left = { val, left: null, right: null };
      else insert(root.left, val);
    } else {
      if (root.right === null) root.right = { val, left: null, right: null };
      else insert(root.right, val);
    }
  }

  for (let i = 1; i < lst.length; i++) {
    insert(tree, lst[i]);
  }

  function searchNode(root, target) {
    if (root === null) return false;
    if (root.val === target) return true;
    if (target < root.val) return searchNode(root.left, target);
    return searchNode(root.right, target);
  }

  return searchList.map((val) => searchNode(tree, val));
}

console.log(solution([5, 3, 8, 4, 2, 1, 7, 10], [1, 2, 5, 6]));
console.log(solution([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]));
