// 루트 노드 찾기
function find(parents, x) {
  if (parents[x] === x) return x;
  return (parents[x] = find(parents, parents[x]));
}

// 두 개의 집합을 합치기
function union(parents, x, y) {
  const root1 = find(parents, x);
  const root2 = find(parents, y);
  parents[root2] = root1;
}

function solution(k, operations) {
  // 초기: 각 노드가 자기 자신을 루트로 가짐
  const parents = Array.from({ length: k }, (_, i) => i);

  // 연산 수행
  for (const op of operations) {
    if (op[0] === "u") {
      union(parents, op[1], op[2]);
    } else if (op[0] === "f") {
      find(parents, op[1]); // 경로 압축만 수행, 결과는 저장 안 함
    }
  }

  // 모든 노드의 루트를 구해서 집합 수 계산
  const n = new Set(Array.from({ length: k }, (_, i) => find(parents, i))).size;

  return n;
}

console.log(
  solution(3, [
    ["u", 0, 1],
    ["u", 1, 2],
    ["f", 2],
  ])
);
console.log(
  solution(4, [
    ["u", 0, 1],
    ["u", 2, 3],
    ["f", 0],
  ])
);
