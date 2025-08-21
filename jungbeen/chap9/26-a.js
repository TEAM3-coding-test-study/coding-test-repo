function getInorder(p, len, arr) {
  let result = [];
  if (2 * p + 1 >= len) {
    return [arr[p]];
  }
  result = [
    ...getInorder(2 * p + 1, len, arr),
    arr[p],
    ...getInorder(2 * p + 2, len, arr),
  ];
  return result;
}

function getPre(p, len, arr) {
  let result = [];
  if (2 * p + 1 >= len) {
    return [arr[p]];
  }
  result = [
    arr[p],
    ...getPre(2 * p + 1, len, arr),
    ...getPre(2 * p + 2, len, arr),
  ];
  return result;
}

function getPost(p, len, arr) {
  let result = [];
  if (2 * p + 1 >= len) {
    return [arr[p]];
  }
  result = [
    ...getPost(2 * p + 1, len, arr),
    ...getPost(2 * p + 2, len, arr),
    arr[p],
  ];
  return result;
}

function solution(nodes) {
  return [
    getPre(0, nodes.length, nodes).join(" "),
    getInorder(0, nodes.length, nodes).join(" "),
    getPost(0, nodes.length, nodes).join(" "),
  ];
}

console.log(solution([1, 2, 3, 4, 5, 6, 7]));
