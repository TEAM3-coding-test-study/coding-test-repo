const graph = { A: { B: 9, C: 3 }, B: { A: 5 }, C: { B: 1 } };
const start = "A";

const graph2 = { A: { B: 1 }, B: { C: 5 }, C: { D: 1 }, D: {} };
const start2 = "A";

const solution = (graph, start) => {
  const visited = new Set();
  const dataObj = {};
  const resultArray = [{}, {}];

  Object.keys(graph).forEach((item, _) => {
    dataObj[item] = [];
    if (item === start) {
      dataObj[item][0] = 0;
      dataObj[item][1] = start;
    } else {
      dataObj[item][0] = Infinity;
      dataObj[item][1] = Infinity;
    }
  });

  let i = 0;
  while (i < Object.keys(graph).length) {
    // 방문하지 않은 노드 중 최소 비용이 가장 적은 노드 구하기
    const minCost = Math.min(
      ...Object.entries(dataObj)
        .filter(([key]) => !visited.has(key))
        .map(([_, value]) => value[0])
    );
    // console.log(minCost);
    const minCostNode = Object.keys(dataObj).filter((key) => {
      return dataObj[key][0] === minCost;
    })[0];
    visited.add(minCostNode);

    // console.log("mcn:", minCostNode);
    Object.keys(graph[minCostNode]).forEach((item, _) => {
      // 현재 해당 노드까지의 최소 거리보다 최소비용 노드를 거쳐서 해당 노드까지 가는 비용이 더 적은 경우
      if (dataObj[item][0] > dataObj[minCostNode][0] + graph[minCostNode][item]) {
        dataObj[item][0] = dataObj[minCostNode][0] + graph[minCostNode][item];
        dataObj[item][1] = minCostNode;
      }
    });
    i++;
  }

  // 여기서부터는 문제 요구 출력에 맞게 포맷팅하는 부분
  Object.entries(dataObj).forEach((item, _) => {
    resultArray[0][item[0]] = item[1][0];
    resultArray[1][item[0]] = [];
  });

  Object.entries(dataObj).forEach((item, _) => {
    let prev = item[0];
    resultArray[1][item[0]].push(prev); // 일단 자기 자신은 추가

    while (prev !== dataObj[prev][1]) {
      resultArray[1][item[0]].push(dataObj[prev][1]);
      prev = dataObj[prev][1];
    }

    resultArray[1][item[0]].reverse();
  });

  return resultArray;
};

console.log(solution(graph2, start2));
