const nodes = [1, 2, 3, 4, 5, 6, 7];

const preorder = (nodes) => {
  let curIdx = 0;
  const returnArr = [];
  while (returnArr.length < nodes.length) {
    let leftChildIdx = curIdx * 2 + 1;
    let rightChildIdx = curIdx * 2 + 2;

    // console.log(curIdx);

    if (nodes[curIdx] && !returnArr.includes(nodes[curIdx])) {
      returnArr.push(nodes[curIdx]);
      curIdx = curIdx * 2 + 1;
    } else if (nodes[leftChildIdx] && !returnArr.includes(nodes[leftChildIdx])) {
      curIdx = curIdx * 2 + 1;
    } else if (nodes[rightChildIdx] && !returnArr.includes(nodes[rightChildIdx])) {
      curIdx = curIdx * 2 + 2;
    } else {
      curIdx = Math.floor((curIdx - 1) / 2);
    }

    // console.log(returnArr);
    // console.log("--------");
  }

  return returnArr;
};

const inorder = (nodes) => {
  let curIdx = 0;
  const returnArr = [];

  while (returnArr.length < nodes.length) {
    let leftChildIdx = curIdx * 2 + 1;
    let rightChildIdx = curIdx * 2 + 2;

    // console.log(curIdx);

    if (nodes[leftChildIdx] && !returnArr.includes(nodes[leftChildIdx])) {
      curIdx = curIdx * 2 + 1;
    } else if (nodes[curIdx] && !returnArr.includes(nodes[curIdx])) {
      returnArr.push(nodes[curIdx]);
      curIdx = curIdx * 2 + 2;
    } else if (nodes[rightChildIdx] && !returnArr.includes(nodes[rightChildIdx])) {
      curIdx = curIdx * 2 + 2;
    } else {
      curIdx = Math.floor((curIdx - 1) / 2);
    }

    // console.log(returnArr);
    // console.log("--------");
  }

  return returnArr;
};

const postorder = (nodes) => {
  let curIdx = 0;
  const returnArr = [];

  while (returnArr.length < nodes.length) {
    let leftChildIdx = curIdx * 2 + 1;
    let rightChildIdx = curIdx * 2 + 2;
    // console.log(curIdx);

    if (nodes[leftChildIdx] && !returnArr.includes(nodes[leftChildIdx])) {
      curIdx = curIdx * 2 + 1;
    } else if (nodes[rightChildIdx] && !returnArr.includes(nodes[rightChildIdx])) {
      curIdx = curIdx * 2 + 2;
    } else if (nodes[curIdx] && !returnArr.includes(nodes[curIdx])) {
      returnArr.push(nodes[curIdx]);
      curIdx = Math.floor((curIdx - 1) / 2);
    }

    // console.log(returnArr);
    // console.log("--------");
  }

  return returnArr;
};

const solution = (nodes) => {
  return [preorder(nodes).join(" "), inorder(nodes).join(" "), postorder(nodes).join(" ")];
};

console.log(solution(nodes));
