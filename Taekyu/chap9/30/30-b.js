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

// ➊ 이동 가능한 좌표인지 판단하는 함수
function isValidMove(ny, nx, n, m, maps) {
  return 0 <= ny && ny < n && 0 <= nx && nx < m && maps[ny][nx] !== "X";
}

// ➋ 방문한 적이 없으면 큐에 넣고 방문 여부 표시
function appendToQueue(ny, nx, k, time, visited, q) {
  if (!visited[ny][nx][k]) {
    visited[ny][nx][k] = true;
    q.push([ny, nx, k, time + 1]);
  }
}

function solution(maps) {
  const n = maps.length; // 미로의 세로 길이
  const m = maps[0].length; // 미로의 가로 길이

  // 3차원 배열을 만듦
  // ex) n=2, m=3인 경우
  //   [
  //    [ [false, false], [false, false], [false, false] ],
  //    [ [false, false], [false, false], [false, false] ]
  //   ]
  const visited = Array.from(Array(n), () =>
    Array(m)
      .fill(false)
      .map(() => Array(2).fill(false))
  );

  // ➌ 위, 아래, 왼쪽, 오른쪽 이동 방향 (이동 좌표량을 미리 배열로 만들어놓음)
  const dy = [-1, 1, 0, 0];
  const dx = [0, 0, -1, 1];
  const q = new Queue();
  let endY = -1;
  let endX = -1;

  // ➍ 시작점과 도착점을 찾아 큐에 넣고 방문 여부 표시
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (maps[i][j] === "S") {
        // 시작점
        q.push([i, j, 0, 0]);
        // x좌표, y좌표, 레버 동작 여부, 시작 지점부터 해당 좌표까지 가는 데 걸린 시간
        visited[i][j][0] = true;
      }
      if (maps[i][j] === "E") {
        // 도착점
        endY = i;
        endX = j;
      }
    }
  }

  while (!q.isEmpty()) {
    const [y, x, k, time] = q.pop(); // ➎ 큐에서 좌표와 이동 횟수를 꺼냄
    // k == 1인 경우 레버가 당겨져있는거임

    // ➏ 도착점에 도달하면 결과 반환
    if (y === endY && x === endX && k === 1) {
      return time;
    }

    // ➐ 네 방향으로 이동
    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];

      // ➑ 이동 가능한 좌표인 때에만 큐에 넣음 -> 이동 가능하지 않으면 다른 방향 이동 테스트해봄
      if (!isValidMove(ny, nx, n, m, maps)) {
        continue;
      }

      // 유효한 이동이면 레버인지 아닌지를 체크
      // ➒ 다음 이동 지점이 레버인 경우
      if (maps[ny][nx] === "L") {
        appendToQueue(ny, nx, 1, time, visited, q);
      } else {
        // ➓ 다음 이동 지점이 레버가 아닌 경우
        appendToQueue(ny, nx, k, time, visited, q);
      }
    }
  }

  // ⓫ 도착점에 도달하지 못한 경우
  return -1;
}
