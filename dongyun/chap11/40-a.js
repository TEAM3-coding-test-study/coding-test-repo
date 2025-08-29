function solution(graph, start){
    const answer = [];

    const size = Object.entries(graph).length;

    // 시작 노드로부터 특정 노드까지의 최소 비용을 저장할 공간 설정하기
    const minW = {};
    // 직전 노드를 저장할 공간 설정하기
    const preNode = {};

    for(const [key, value] of Object.entries(graph)){
        // 최소 비용을 저장할 공간은 모두 매우 큰 값으로 초기화.(무한대 등)
        minW[key] = Infinity;
        // 직전 노드를 저장할 공간도 INF로 초기화.
        preNode[key] = [Infinity];
    }

    // 시작 노드의 경우 ⇒ 최소 비용 0 + 직전 노드는 자신
    minW[start] = 0;
    preNode[start] = [start];
    const visited = new Set();

    const update = (N, cnt) =>{
        // 노드 개수에서 1을 뺀 값의 횟수만큼 반복.
        if(cnt === size){
            return 0;
        }

        // N => A: grapth[N] => { B: 9, C: 3 }
        if(graph[N]){
            for(const [key, value] of Object.entries(graph[N])){
            // { B: 9}
            // 해당 노드를 통해 방문할 수 있는 인접한 노드 중, 최소비용이 적은 노드 선택
            console.log("최소 비용 비교, minW[key] :", minW[key], " vs minW[N] + value : ", minW[key], value)
            if(minW[key] > minW[N] + value){
                // 해당 노드를 거쳐서 각 노드까지 가는 최소 비용
                // 현재까지 구한 최소 비용 => 2가지 비교하여 더 작은 비용으로 갱신 + 직전 노드도 같이 갱신.
                minW[key] = minW[N] + value;

                // N 노드를 거쳐 가는 것이 더 적은 비용이므로,
                // 직전 노드도 preNode[N] + key
                // preNode[key] = preNode[N]; => 참조 값을 넘겨버리는 문제;
                preNode[key]= [...preNode[N]];
                preNode[key].push(key);
            }
        }
        }
        
        // 인접 노드까지의 거리를 모두 업데이트한 노드는 방문 표시.
        visited.add(N);

        let minValue = Infinity;
        let minKey = -1;
        for(const [key, value] of Object.entries(minW)){
            if(minValue > value && !visited.has(key)){
                minKey = key;
                minValue = value;
            }
        }

        for(const [key, value] of Object.entries(minW)){
            console.log("minw | key : ", key, ", value : ", value);
        }
        console.log("---------------------------------")
        // N 노드를 거쳐 가는 것이 더 적은 비용이므로,
        // 직전 노드도 preNode[N] + key

        update(minKey, cnt + 1);
    }

    update(start, 0);

    answer.push(minW, preNode);
    return answer;
}



// console.log(solution({ A: { B: 9, C: 3 }, B: { A: 5 }, C: { B: 1 } }, 'A'));
// [{'A': 0, 'B': 4, 'C': 3}, {'A': ['A'], 'B': ['A', 'C', 'B'], 'C': ['A', 'C']}]

console.log(solution({ A: { B: 1 },B: { C: 5 },C: { D: 1 }, D: {} }, 'A'));
// [{'A': 0, 'B': 1, 'C': 6, 'D': 7}, {'A': ['A'], 'B': ['A', 'B'], 'C': ['A', 'B', 'C'], 'D': ['A', 'B', 'C', 'D']}]