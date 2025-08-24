// 교재 정답

// 퀸이 서로 공격할 수 없는 위치에 놓이는 경우의 수를 구하는 함수
function search(n, y, width, diagonal1, diagonal2) {
  let answer = 0;

  // 모든 행에 대해서 퀸의 위치가 결정되었을 경우
  if (y === n) {
    answer += 1;
  } else {
    for (let i = 0; i < n; i++) {
      // 해당 위치에 이미 퀸이 있는 경우, 대각선 상에 퀸이 있는 경우 스킵
      if (width[i] || diagonal1[i + y] || diagonal2[i - y + n]) {
        continue;
      }
      width[i] = diagonal1[i + y] = diagonal2[i - y + n] = true;
      // 다음 행으로 이동하여 재귀적으로 해결 가능한 경우의 수 찾기
      answer += search(n, y + 1, width, diagonal1, diagonal2);
      // 해당 위치에 놓인 퀸을 제거함
      width[i] = diagonal[i + y] = diagonal2[i - y + n] = false;
    }
  }
  return answer;
}

function solution(n) {
  const answer = search(
    n,
    0,
    Array(n).fill(false),
    Array(n * 2).fill(false),
    Array(n * 2).fill(false)
  );
  return answer;
}
