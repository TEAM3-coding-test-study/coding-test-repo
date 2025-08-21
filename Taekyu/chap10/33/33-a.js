const k = 3;
const operations = [
  ["u", 0, 1],
  ["u", 1, 2],
  ["f", 2],
];

const find = (node, setArr) => {
  let i = node;
  // 루트 노드를 찾기위한 순회
  while (true) {
    if (setArr[i] === i) {
      return setArr[i];
    } else {
      i = setArr[i];
    }
  }
};

const union = (a, b, setArr) => {
  const rootA = find(a, setArr);
  const rootB = find(b, setArr);

  const unionRoot = rootA > rootB ? rootA : rootB;
  const embeddedRoot = rootA > rootB ? rootB : rootA;

  setArr[embeddedRoot] = unionRoot;

  console.log(setArr);
};

const solution = (k, operations) => {
  const setArr = Array.from({ length: k }, (_, i) => i);
  let count = 0; // 집합의 갯수를 담는 변수

  // operations 배열을 순회하면서 각 배열 요소의 연산을 진행
  for (const i of operations) {
    switch (i[0]) {
      case "u":
        union(i[1], i[2], setArr);
        break;
      case "f":
        find(i[1], setArr);
        break;
    }
  }

  for (let i = 0; i < setArr.length; i++) {
    if (i === setArr[i]) count++;
  }

  return count;
};

console.log(solution(k, operations));
