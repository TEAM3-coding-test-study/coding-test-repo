function dfs(curK, cnt, dungeons, visited) {
  let answerMax = cnt;

  for (let i = 0; i < dungeons.length; i++) {
    if (curK >= dungeons[i][0] && visited[i] === 0) {
      visited[i] = 1;
      answerMax = Math.max(answerMax, dfs(curK - dungeons[i][1], cnt + 1, dungeons, visited));
      visited[i] = 0;
    }
  }
  return answerMax;
}

const solution = (k, dungeons) => {
  const visited = Array(dungeons.length).fill(0); // 방문 여부를 저장
  const answerMax = dfs(k, 0, dungeons, visited);
  return answerMax;
};

solution(80, [
  [80, 20],
  [50, 40],
  [30, 10],
]);
