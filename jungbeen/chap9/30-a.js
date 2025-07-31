function solution(maps) {
  var answer = -1;
  let startX = 0;
  let startY = 0;
  let endX = 0;
  let endY = 0;
  let cache = [];
  let xarr = [];
  let yarr = [];
  const xlen = maps[0].length;
  const ylen = maps.length;
  let isLever = false;

  for (let i = 0; i < maps.length; i++) {
    cache.push([]);
    for (let j = 0; j < maps[i].length; j++) {
      if (maps[i][j] === "S") {
        cache[i].push(0);
        startY = i;
        startX = j;
      } else if (maps[i][j] === "L") cache[i].push(-2);
      else if (maps[i][j] === "E") {
        endY = i;
        endX = j;
        cache[i].push(-1);
      } else if (maps[i][j] === "X") cache[i].push(-3);
      else cache[i].push(-1);
    }
  }

  xarr.push(startX);
  yarr.push(startY);
  let x = 0;
  let y = 0;
  let cnt = 1;
  let getVal = 0;
  while (xarr.length > 0) {
    x = xarr.pop();
    y = yarr.pop();
    if (x + 1 < xlen) {
      getVal = cache[x + 1][y];
      if (x + 1 === endX && y === endY) {
        if (isLever) {
          answer = cnt;
          break;
        }
      }
      if (getVal === -2) {
        isLever = true;
        cache[x + 1][y] = cnt;
        xarr = [x + 1, ...xarr];
        yarr = [y, ...yarr];
      } else if (getVal === -1) {
        cache[x + 1][y] = cnt;
        xarr = [x + 1, ...xarr];
        yarr = [y, ...yarr];
      }
    }
    if (x - 1 >= 0) {
      getVal = cache[x - 1][y];
      if (x - 1 === endX && y === endY) {
        if (isLever) {
          answer = cnt;
          break;
        }
      }
      if (getVal === -2) {
        isLever = true;
        cache[x - 1][y] = cnt;
        xarr = [x - 1, ...xarr];
        yarr = [y, ...yarr];
      } else if (getVal === -1) {
        cache[x - 1][y] = cnt;
        xarr = [x - 1, ...xarr];
        yarr = [y, ...yarr];
      }
    }
    if (y + 1 < ylen) {
      getVal = cache[x][y + 1];
      if (x === endX && y + 1 === endY) {
        if (isLever) {
          answer = cnt;
          break;
        }
      }
      if (getVal === -2) {
        isLever = true;
        cache[x][y + 1] = cnt;
        xarr = [x, ...xarr];
        yarr = [y + 1, ...yarr];
      } else if (getVal === -1) {
        cache[x][y + 1] = cnt;
        xarr = [x, ...xarr];
        yarr = [y + 1, ...yarr];
      }
    }
    if (y - 1 >= 0) {
      getVal = cache[x][y - 1];
      if (x === endX && y - 1 === endY) {
        if (isLever) {
          answer = cnt;
          break;
        }
      }
      if (getVal === -2) {
        isLever = true;
        cache[x][y - 1] = cnt;
        xarr = [x, ...xarr];
        yarr = [y - 1, ...yarr];
      } else if (getVal === -1) {
        cache[x][y - 1] = cnt;
        xarr = [x, ...xarr];
        yarr = [y - 1, ...yarr];
      }
    }
    cnt++;
  }
  return answer;
}

console.log(solution(["SOOOE", "XXXXO", "OOOOO", "OXXXX", "OOOOL"]));
// console.log(solution(["LOOXS", "OOOOX", "OOOOO", "OOOOO", "EOOOO"]));
