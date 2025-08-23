// 교재 정답

class Queue {
  items = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  first() {
    return this.items[this.front];
  }

  last() {
    return this.items[this.rear - 1];
  }

  pop() {
    return this.items[this.front++];
  }

  isEmpty() {
    return this.front === this.rear;
  }
}

function solution(maps) {
  // 이동 방향 나타내는 배열 정의
  const move = [
    [-1, 0],
    [0, -1],
    [0, 1],
    [1, 0],
  ];

  // 맵의 크기
  const n = maps.length;
  const m = maps[0].length;

  const dist = Array.from({ length: n }, () => Array(m).fill(-1));

  function bfs(start) {
    const q = new Queue();
    q.push(start);
    dist[start[0]][start[1]] = 1;

    while (!q.isEmpty()) {
      const here = q.pop();

      for (const [dx, dy] of move) {
        const row = here[0] + dx;
        const column = here[1] + dy;
        if (row < 0 || row >= n || column < 0 || column >= m) {
          continue;
        }

        if (maps[row][column] === 0) {
          continue;
        }

        if (dist[row][column] === -1) {
          q.push([row, column]);
          dist[row][column] = dist[here[0]][here[1]] + 1;
        }
      }
    }
    return this;
  }

  bfs([0, 0]);

  return dist[n - 1][m - 1];
}
