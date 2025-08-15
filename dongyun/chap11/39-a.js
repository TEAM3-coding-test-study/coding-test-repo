function solution(graph, start) {
    const route = [];
    const visited = new Set();

    const adjList = {};
    graph.forEach(([u, v]) => {
        if (!adjList[u]) adjList[u] = [];
        adjList[u].push(v);
    });

    const q = [];
    // 시작 노드를 큐에 push 하면서 방문 처리를 한다.
    q.push(start);
    visited.add(start);

    while (q.length !== 0) {
        // 큐에서 노드를 pop 
        const top = q.shift();
        route.push(top);
        // pop한 노드와 인접한 모든 노드를 확인하고,
        if (adjList[top]) {
            for (const node of adjList[top]) {
                // 그 중에서 아직 방문하지 않은 노드를,
                if (!visited.has(node)) {
                    // 큐에 push하며 방문 처리한다.
                    q.push(node);
                    visited.add(node);
                }
            }
        }
    }

    return route;
}

console.log(solution([[1, 2], [1, 3], [2, 4], [2, 5], [3, 6], [3, 7], [4, 8], [5, 8], [6, 9], [7, 9]], 1)) // 반환값 :[1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(solution([[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0]], 1)) // 반환값 : [1, 2, 3, 4, 5, 0]