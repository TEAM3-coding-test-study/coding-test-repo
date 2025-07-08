/* 처음에 스테이지 1인 사람 그 이상인 사람들을 다른 배열로 분리
    그런식으로 계속해서 이상인 사람들은 스테이지에 플러스해가면서 계속 분리 
    N이 도전중인 스테이지
    마지막 N+1에 있는 사람은 마지막까지 클리어한 사람 */

function solution(N, stages) {
  let result = [];

  for (let i = 1; i <= N; i++) {
    const reached = stages.filter((stage) => stage >= i).length;
    const stuck = stages.filter((stage) => stage === i).length;

    const fail = reached === 0 ? 0 : stuck / reached;

    result.push({ stage: i, fail });
  }

  result.sort((a, b) => {
    if (b.fail === a.fail) {
      return a.stage - b.stage;
    }
    return b.fail - a.fail;
  });

  return result.map((obj) => obj.stage);
}
