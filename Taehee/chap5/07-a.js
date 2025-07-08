/* 
이미 걸어간길은 카운트X
경계값을 벗어나면 무시
*/
function solution(dirs) {
  var answer = 0;
  var location = [0, 0, 0, 0];
  let y = 0;
  let x = 0;
  const chardirs = dirs.split("");
  let setdirs = [];

  for (let i = 0; i < chardirs.length; i++) {
    y = location[0] + location[1];
    x = location[3] + location[2];

    let nx = x;
    let ny = y;

    switch (chardirs[i]) {
      case "U":
        if (y + 1 > 5) continue;
        location[0] += 1;
        ny += 1;
        break;
      case "D":
        if (y - 1 < -5) continue;
        location[1] -= 1;
        ny -= 1;
        break;
      case "L":
        if (x - 1 < -5) continue;
        location[2] -= 1;
        nx -= 1;
        break;
      case "R":
        if (x + 1 > 5) continue;
        location[3] += 1;
        nx += 1;
        break;
    }

    const path = [x, y, nx, ny];
    const reversePath = [nx, ny, x, y];

    let duplicated = false;
    for (let j = 0; j < setdirs.length; j++) {
      let d = setdirs[j];
      if (
        (d[0] === path[0] &&
          d[1] === path[1] &&
          d[2] === path[2] &&
          d[3] === path[3]) ||
        (d[0] === reversePath[0] &&
          d[1] === reversePath[1] &&
          d[2] === reversePath[2] &&
          d[3] === reversePath[3])
      ) {
        duplicated = true;
        break;
      }
    }

    if (!duplicated) {
      answer++;
      setdirs.push(path);
    }
  }

  return answer;
}
