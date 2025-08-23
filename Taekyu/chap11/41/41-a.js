const graph = [
  [
    [1, 4],
    [2, 3],
    [4, -6],
  ],
  [[3, 5]],
  [[1, 2]],
  [
    [0, 7],
    [2, 4],
  ],
  [[2, 2]],
];

const source = 0;

const solution = (graph, source) => {
  const dataObj = [];
  const resultArray = [[], []];

  // 초기화
  graph.forEach((_, idx) => {
    dataObj[idx] = [];
    if (idx === source) {
      dataObj[idx][0] = 0;
      dataObj[idx][1] = source;
    } else {
      dataObj[idx][0] = Infinity;
      dataObj[idx][1] = Infinity;
    }
  });

  for (let i = 0; i < graph.length - 1; i++) {
    // 전체 반복

    for (let j = 0; j < graph.length; j++) {
      // 거치는 노드 순회
      const passThrough = j;
      for (let k = 0; k < graph.length; k++) {
        console.log("(j, k):", j, k);
        let edge_idx = null;
        graph[j].forEach((item, index) => {
          if (item[0] === k) {
            edge_idx = index;
          }
        });

        if (edge_idx === null) continue;
        console.log(edge_idx);
        if (dataObj[k][0] > dataObj[passThrough][0] + graph[j][edge_idx][1]) {
          dataObj[k][0] = dataObj[passThrough][0] + graph[j][edge_idx][1];
          dataObj[k][1] = j;
        }
        console.log(dataObj);
      }
    }

    const dataObjCopy = [...dataObj];

    for (let j = 0; j < graph.length; j++) {
      // 거치는 노드 순회
      const passThrough = j;
      for (let k = 0; k < graph.length; k++) {
        let edge_idx = null;
        graph[j].forEach((item, index) => {
          if (item[0] === k) {
            edge_idx = index;
          }
        });

        if (edge_idx === null) continue;
        if (dataObjCopy[k][0] > dataObjCopy[passThrough][0] + graph[j][edge_idx][1]) {
          dataObjCopy[k][0] = dataObjCopy[passThrough][0] + graph[j][edge_idx][1];
          dataObjCopy[k][1] = j;
        }
      }
    }

    if (!(JSON.stringify(dataObj) === JSON.stringify(dataObjCopy))) {
      return [-1];
    }
  }

  console.log(dataObj);

  dataObj.forEach((item, index) => {
    resultArray[0].push(item[0]);
    if (index === source) {
      resultArray[1].push(null);
    } else {
      resultArray[1].push(item[1]);
    }
  });

  return resultArray;
};

console.log(solution(graph, source));
