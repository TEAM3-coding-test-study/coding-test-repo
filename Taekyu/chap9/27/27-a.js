const lst = [5, 3, 8, 4, 2, 1, 7, 10];
const searchList = [1, 2, 5, 6];

const lst2 = [1, 3, 5, 7, 9];
const searchList2 = [2, 4, 6, 8, 10];

const addChild = (idx, item, tree) => {
  if (!tree[idx]) {
    tree[idx] = item;
    return;
  }
  if (item < tree[idx]) {
    addChild(idx * 2 + 1, item, tree);
  } else {
    addChild(idx * 2 + 2, item, tree);
  }
};

const makeBinarySearchTree = (lst) => {
  const tree = new Array();
  let idx = 0;
  tree[idx] = lst[0];

  for (let i = 1; i < lst.length; i++) {
    addChild(0, lst[i], tree);
  }
  return tree;
};

const solution = (lst, searchList) => {
  const returnArr = new Array(0);
  const tree = makeBinarySearchTree(lst);

  for (const item of searchList) {
    if (tree.includes(item)) {
      returnArr.push(true);
    } else {
      returnArr.push(false);
    }
  }

  return returnArr;
};

console.log(solution(lst2, searchList2));
