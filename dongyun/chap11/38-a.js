function solution(graph, start) {
    const route = [];
    const visited = new Set();
    const dfs = (N) => {
        visited.add(N); 
        route.push(N);
        for (let i = 0; i < graph.length; i++) {
            // 그래프 배열 돌면서, 자신 노드 + 인접 노드 찾기
            const [startNode, targetNode] = graph[i];
            console.log(targetNode, N);
            if(startNode === N && !visited.has(targetNode)){
                dfs(targetNode);
            }
        }
        return;
    }
    dfs(start);
    console.log("----------")
    console.log(route);
    return route.join(",");
}

// console.log(solution([['A', 'B'],['B', 'C'],['C', 'D'],['D', 'E']], 'A'));
console.log(solution([['A', 'B'],['A', 'C'],['B', 'D'],['B', 'E'],['C', 'F'],['E', 'F']], 'A'));