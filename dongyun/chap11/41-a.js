function solution(graph, source) {
    // 시작 노드로부터 특정 노드까지의 최소 비용을 저장할 공간 설정하기
    const minW = [];
    // 직전 노드를 저장할 공간 설정하기
    const preNode = [];

    for (let i = 0; i < graph.length; i++) {
        // 최소 비용을 저장할 공간은 모두 매우 큰 값으로 초기화.(무한대 등)
        minW[i] = Infinity;
        // 직전 노드를 저장할 공간도 INF로 초기화.
        preNode[i] = [Infinity];
    }

    // 시작 노드의 경우 ⇒ 최소 비용 0 + 직전 노드는 자신
    minW[source] = 0;
    preNode[source] = null;

    for (let i = 0; i <= graph.length; i++) {
        for (let j = 0; j < graph.length; j++) {
            for (const nodeInfo of graph[j]) {
                const [targetNode, weight] = nodeInfo;
                if (minW[targetNode] > (minW[j] + weight)) {
                    // 음의 사이클이 발견된 경우, -1 반환
                    if(i === graph.length)
                        return [-1];
                    minW[targetNode] = minW[j] + weight;
                    preNode[targetNode] = j;
                }
            }
        }
    }

    return [minW, preNode];
}

// console.log(solution([[[1, 4], [2, 3], [4, -6]], [[3, 5]], [[1, 2]], [[0, 7], [2, 4]], [[2, 2]]], 0)) // [[0, -2, -4, 3, -6], [null, 2, 4, 1, 0]]
console.log(solution([[[1, 5], [2, -1]], [[2, 2]], [[3, -2]], [[0, 2], [1, 6]]], 0)) // [-1]aqwwwwwwww