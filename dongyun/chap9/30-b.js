class Queue {
    items = [];
    front = 0;
    rear = 0;

    push(item) {
        this.items.push(item);
        this.rear++;
    }
    pop() {
        return this.items[this.front++];
    }
    isEmpty() { return this.front === this.rear }
}


function solution(maps) {
    var answer = 0;

    const n = maps.length;
    const m = maps[0].length;
    const q = new Queue();

    const visited = Array.from(Array(n), () => Array(m).fill(false).map(() => Array(2).fill(false)))
    const addVisit = (y, x, k, time, visited, q) => {
        if (!visited[y][x][k]) {
            visited[y][x][k] = true;
            q.push([y, x, k, time + 1]);
        }
    }
    const judge = (maps, y, x) => {
        if (0 > y || y >= n || 0 > x || x >= m) {
            return false;
        }
        else if (maps[y][x] === "X") {
            return false;
        }
        else
            return true
    }

    let endX = -1;
    let endY = -1;

    Outer: for (let i = 0; i < maps.length; i++) {
        for (let j = 0; j < maps[0].length; j++) {
            if (maps[i][j] === "S") {
                q.push([i, j, 0, 0]);
                visited[i][j][0] = true;

                // break Outer;
            }
            if (maps[i][j] === "E") {
                endX = j;
                endY = i;
            }
        }
    }


    while (!q.isEmpty()) {
        const [nowY, nowX, leverFound, time] = q.pop();


        if (maps[nowY][nowX] === "L" && leverFound !== 1) {
            addVisit(nowY, nowX, 1, time, visited, q);
        }

        if (maps[nowY][nowX] === "E" && leverFound === 1) {
            if (time < finalTime)
                finalTime = time;
            return time;
        }

        if (judge(maps, nowY - 1, nowX)) {
            // console.log("위로 이동");
            addVisit(nowY - 1, nowX, leverFound, time + 1, visited, q);
        }
        if (judge(nowY + 1, nowX)) {
            //  console.log("아래로 이동");
            addVisit(nowY + 1, nowX, leverFound, time + 1, visited, q);
        }
        if (judge(maps, nowY, nowX - 1)) {
            //  console.log("왼쪽 이동");
            addVisit(nowY, nowX - 1, leverFound, time + 1, visited, q);
        }
        if (judge(maps, nowY, nowX + 1)) {
            //  console.log("오른쪽 이동", nowY, nowX + 1, pY, pX, leverFound);
            //  console.log(nowY,nowX,maps[nowY][nowX + 1])
            addVisit(nowY, nowX + 1, leverFound, time + 1, visited, q);
        }
    }

    return -1;

}