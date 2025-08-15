function solution(maps) {
    var answer = 0;

    const visited = new Set();
    const q = [];

    q.push([0, 0]);
    visited.add("0,0");

    const findNear = (y, x) => {
        x -= 1;
        // console.log(y, x, `${y},${x}`);
        if (y >= 0 && y < maps.length && x >= 0 && x < maps[0].length && !visited.has(`${y},${x}`) && maps[y][x] === 1) {
            console.log("왼")
            q.push([y, x]);
            visited.add(`${y},${x}`);
            if (y === maps.length - 1 && x === maps[0].length - 1) {
                x = -50;
                y = -50;
            }
        }
        x += 2;
        // console.log(y, x, `${y},${x}`);
        if (y >= 0 && y < maps.length && x >= 0 && x < maps[0].length && !visited.has(`${y},${x}`) && maps[y][x] === 1) {
            console.log("오")
            q.push([y, x]);
            visited.add(`${y},${x}`);
            if (y === maps.length - 1 && x === maps[0].length - 1) {
                               x = -50;
                y = -50;
            }

        }
        x -= 1;

        y -= 1;
        // console.log(y, x, `${y},${x}`);
        if (y >= 0 && y < maps.length && x >= 0 && x < maps[0].length && !visited.has(`${y},${x}`) && maps[y][x] === 1) {
            console.log("위")
            q.push([y, x]);
            visited.add(`${y},${x}`);
            if (y === maps.length - 1 && x === maps[0].length - 1) {
                               x = -50;
                y = -50;
            }

        }
        y += 2;
        // console.log(y, x, `${y},${x}`);
        if (y >= 0 && y < maps.length && x >= 0 && x < maps[0].length && !visited.has(`${y},${x}`) && maps[y][x] === 1) {
            console.log("아래")
            q.push([y, x]);
            visited.add(`${y},${x}`);
            if (y === maps.length - 1 && x === maps[0].length - 1) {
                               x = -50;
                y = -50;
            }
        }
    }

    while (q.length !== 0) {
        const [topY, topX] = q.shift();
        answer += 1;
        console.log(topY, topX)
        findNear(topY, topX);
    }

    return answer;
}

console.log(solution([[1, 0, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 0, 1], [0, 0, 0, 0, 1]]))