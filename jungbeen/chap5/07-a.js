function solution(dirs) {
  var answer = 0;
  var crtX = 5;
  var crtY = 5;
  var info = new Array(11);
  for (let i = 0; i < 11; i++) {
    info[i] = new Array(11).fill(0);
  }

  for (let i of dirs) {
    if (i === "U") {
      if (crtY === 10) continue;
      if (!(info[crtX][crtY] & 0b1000 || info[crtX][crtY + 1] & 0b0010)) {
        answer++;
        info[crtX][crtY] = info[crtX][crtY] | 0b1000;
      }
      crtY++;
    } else if (i === "R") {
      if (crtX === 10) continue;
      if (!(info[crtX][crtY] & 0b0100 || info[crtX + 1][crtY] & 0b0001)) {
        answer++;
        info[crtX][crtY] = info[crtX][crtY] | 0b0100;
      }
      crtX++;
    } else if (i === "D") {
      if (crtY === 0) continue;
      if (!(info[crtX][crtY] & 0b0010 || info[crtX][crtY - 1] & 0b1000)) {
        answer++;
        info[crtX][crtY] = info[crtX][crtY] | 0b0010;
      }
      crtY--;
    } else {
      if (crtX === 0) continue;
      if (!(info[crtX][crtY] & 0b0001 || info[crtX - 1][crtY] & 0b0100)) {
        answer++;
        info[crtX][crtY] = info[crtX][crtY] | 0b0001;
      }
      crtX--;
    }
  }
  return answer;
}

console.log(solution("LULLLLLLU"));
