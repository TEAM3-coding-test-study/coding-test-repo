const N = 5;
const road = [
  [1, 2, 1],
  [2, 3, 3],
  [5, 2, 2],
  [1, 4, 2],
  [5, 3, 1],
  [5, 4, 2],
];
const K = 3;

const solution = (N, road, K) => {
  const visited = new Set();
  const dataArr = Array.from({ length: N }, () => new Array(2).fill(Infinity)).map((v, idx) => {
    if (idx === 0) {
      v[0] = 0;
      v[1] = 1;
    }
    return v;
  });

  for (let i = 0; i < N; i++) {
    const minCost = Math.min(
      ...dataArr.filter((_, idx) => !visited.has(idx + 1)).map((v, _) => v[0])
    );
    let minCostNode = null;

    // 방문않은 노드 중 최소 비용 노드 구하기
    for (let i = 0; i < dataArr.length; i++) {
      if (!visited.has(i + 1) && dataArr[i][0] === minCost) {
        minCostNode = i + 1;
        break;
      }
    }
    visited.add(minCostNode);

    // console.log("dataArr:", dataArr);
    // 최소 비용 노드의 이웃 구하기
    const neighbor = [];

    road.forEach((v, _) => {
      if (v[0] === minCostNode) {
        neighbor.push([v[1], v[2]]); // 이웃노드, 가중치
      } else if (v[1] === minCostNode) {
        neighbor.push([v[0], v[2]]);
      }
    });

    // console.log("neighbor:", neighbor);

    neighbor.forEach((v) => {
      if (dataArr[v[0] - 1][0] > dataArr[minCostNode - 1][0] + v[1]) {
        dataArr[v[0] - 1][0] = dataArr[minCostNode - 1][0] + v[1];
        dataArr[v[0] - 1][1] = minCostNode;
      }
    });
  }

  // 비용이 K 이하인 마을 갯수 카운트
  let count = 0;
  dataArr.forEach((v) => {
    if (v[0] <= K) count++;
  });

  //   console.log("final:", dataArr);

  return count;
};

console.log(solution(N, road, K));
