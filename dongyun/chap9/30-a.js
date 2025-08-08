function solution(maps) {
    var answer = 0;
    console.log(maps.length, maps[0].length)

    const judge = (maps, y, x, py, px) => {
        // console.log("y, x", y, x)
        // console.log("py, px", py, px);
        if (0 > y || y >= maps.length || 0 > x || x >= maps[0].length) {
            // console.log("위")
            return false;
        }
        //  else if (maps[y]?.[x] && maps[y][x] === "X") {
        else if (maps[y][x] === "X") {
            // console.log("아래")
            return false;
        }
        else if (y === py && x === px) {
            return false;
        }
        else
            return true
    }

    let leverX = -1;
    let leverY = -1;
    let leverTime = Infinity;
    let finalTime = Infinity;
    const search = (maps, nowY, nowX, pY, pX, time, leverFound) => {
        if (maps[nowY][nowX] === "L" && !leverFound) {
            // console.log("레버찾음",nowY, nowX, time)
            leverY = nowY;
            leverX = nowX;
            if (time < leverTime)
                leverTime = time;
            search(maps, nowY, nowX, nowY, nowX, time, true);
        }
        if (maps[nowY][nowX] === "E" && leverFound) {
            // console.log("출구 찾음",nowY, nowX, time);
            if (time < finalTime)
                finalTime = time;
            return time;
        }

        if (judge(maps, nowY - 1, nowX, pY, pX)) {
            // console.log("위로 이동");
            search(maps, nowY - 1, nowX, nowY, nowX, time + 1, leverFound);
        }
        if (judge(maps, nowY + 1, nowX, pY, pX)) {
            //  console.log("아래로 이동");
            search(maps, nowY + 1, nowX, nowY, nowX, time + 1, leverFound);
        }
        if (judge(maps, nowY, nowX - 1, pY, pX)) {
            //  console.log("왼쪽 이동");
            search(maps, nowY, nowX - 1, nowY, nowX, time + 1, leverFound);
        }
        if (judge(maps, nowY, nowX + 1, pY, pX)) {
            //  console.log("오른쪽 이동", nowY, nowX + 1, pY, pX, leverFound);
            //  console.log(nowY,nowX,maps[nowY][nowX + 1])
            search(maps, nowY, nowX + 1, nowY, nowX, time + 1, leverFound);
        }
        else {
            return -1;
        }
    }

    let x = 0;
    let y = 0;
    Outer: for (let i = 0; i < maps.length; i++) {
        for (let j = 0; j < maps[0].length; j++) {
            if (maps[i][j] === "S") {
                y = i;
                x = j;
                break Outer;
            }
        }
    }

    const result1 = search(maps, y, x, y, x, 0, false);

    if (finalTime < Infinity) {
        return finalTime;
    }
    else {
        return -1;
    }

}


console.log(solution(["SOOOL", "XXXXO", "OOOOO", "OXXXX", "OOOOE"]))

// 런타임 에러, 실패
// DFS로 풀어서, 비효율..