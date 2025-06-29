/*
 * 우선 사용자 입력 문자열을 글자 단위로 구분
 * 구분된 글자에 따라 이동을 수행
 * 이동 중 경계 넘어가는지 체크
 * 명령이 수행됨에따라 지나간 경로를 캐싱 -> 중복 경로인 경우 카운트를 높이지 않음
 */

const dirs = "LRLRLRLRLR";

const solution = (dirs) => {
  const curPos = [0, 0];
  const pathCache = [];
  let prevPos = [];
  let pathCachePushFlag = true;

  const checkBoundOut = (futurePos) => {
    if (futurePos > 5 || futurePos < -5) {
      console.log("범위 초과");
      pathCachePushFlag = false;
      return true;
    } else return false;
  };

  const movePos = (dir) => {
    const temp = [...curPos];

    switch (dir) {
      case "U":
        if (checkBoundOut(++temp[1])) return;
        curPos[1] += 1;
        break;
      case "D":
        if (checkBoundOut(--temp[1])) return;
        curPos[1] -= 1;

        break;
      case "L":
        if (checkBoundOut(--temp[0])) return;
        curPos[0] -= 1;

        break;
      case "R":
        if (checkBoundOut(++temp[0])) return;
        curPos[0] += 1;

        break;
    }
  };

  for (let i = 0; i < dirs.length; i++) {
    prevPos = [...curPos];
    movePos(dirs[i]);
    if (!pathCachePushFlag) {
      pathCachePushFlag = true;
      continue;
    }
    pathCache.push([[...prevPos], [...curPos]]);
  }
  // 벡터는 달라도 경로 자체는 같을 수 있기때문에, 시작점과 끝점을 뒤집은 값을 원소끼리 한번씩 비교해서 중복을 제거
  for (let i = 0; i < pathCache.length - 1; i++) {
    for (let j = i; j < pathCache.length; j++) {
      if ([[...pathCache[i][1]], [...pathCache[i][0]]].toString() === pathCache[j].toString()) {
        pathCache.splice(j, 1);
        j--;
      }
    }
  }

  return [...new Set(pathCache.map((pos) => pos.join(",")))].length;
};

console.log(solution(dirs));
