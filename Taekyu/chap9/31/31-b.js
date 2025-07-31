const info = [0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1];
const edges = [
  [0, 1],
  [1, 2],
  [1, 4],
  [0, 8],
  [8, 7],
  [9, 10],
  [9, 11],
  [4, 3],
  [6, 5],
  [4, 6],
  [8, 9],
];

class Queue {
  items = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  pop() {
    return this.items[this.front++];
  }

  isEmpty() {
    return this.front === this.rear;
  }
}

// ➊ 트리 구축 함수
function buildTree(info, edges) {
  const tree = Array.from({ length: info.length }, () => []);
  //   console.log(tree);
  for (const [from, to] of edges) {
    tree[from].push(to);
  }
  return tree;
}

function solution(info, edges) {
  const tree = buildTree(info, edges); // ➋ 트리 생성
  let maxSheep = 0; // ➌ 최대 양의 수를 저장할 변수 초기화

  // ➍ BFS를 위한 큐 생성 및 초기 상태 설정
  const q = new Queue();
  q.push([0, 1, 0, new Set()]); // (현재 위치, 양의 수, 늑대의 수, 방문한 노드 집합)

  // BFS 시작
  while (!q.isEmpty()) {
    // ➎ 큐에서 상태 가져오기
    const [current, sheepCount, wolfCount, visited] = q.pop();
    // ➏ 최대 양의 수 업데이트
    maxSheep = Math.max(maxSheep, sheepCount);
    // ➐ 방문한 노드 집합에 현재 노드의 자식 노드 추가
    for (const next of tree[current]) {
      visited.add(next);
    }
    // ➑ 인접한 노드들에 대해 탐색
    for (const next of visited) {
      if (info[next]) {
        // ➒ 늑대일 경우
        if (sheepCount !== wolfCount + 1) {
          // 양의 수가 늑대 이상인지 체크
          const newVisited = new Set(visited);
          newVisited.delete(next);
          q.push([next, sheepCount, wolfCount + 1, newVisited]);
        }
      } else {
        // ➓ 양일 경우
        const newVisited = new Set(visited);
        newVisited.delete(next); // 지금 탐색하는 자식노드가 현재 노드가 될것이므로 방문한 노드집합에서는 삭제해줌
        q.push([next, sheepCount + 1, wolfCount, newVisited]);
      }
    }
  }

  return maxSheep;
}

solution(info, edges);
