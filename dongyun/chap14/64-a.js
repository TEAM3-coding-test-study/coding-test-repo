function solution(n) {
    const arr = [...new Array(n)].map((_)=> new Array(n).fill(0));

    const dy = [0, 1, 0, -1];
    const dx = [1, 0, -1, 0];

    const checkIndexOut = (y, x)=>{
        if(y < 0 || y >= n || x < 0 || x >= n){
            return false;
        }
        return true;
    }

    const determinTurn = (y, x, dir) =>{
        if(checkIndexOut(y + dy[dir], x + dx[dir]) && arr[y + dy[dir]][x + dx[dir]] === 0){
                return [y + dy[dir], x + dx[dir], dir]
            }

        for(let i = 0; i < 4; i++){
            // const elem = ;
            if(checkIndexOut(y + dy[i], x + dx[i]) && arr[y + dy[i]][x + dx[i]] === 0){
                return [y + dy[i], x + dx[i], i]
            }
        } 
        
        // 모든 방향을 갈 수 없을 때 종료
        return [-1, -1, -1];
    }

 
    
    let nowNumber = 1;
    let x = 0;
    let y = 0;
    let dir = 0;

    arr[y][x] = nowNumber;

    while(true){
        const [ny, nx, ndir] = determinTurn(y,x, dir);
        if(ny === -1 && nx === -1){
            return arr;
        }
        nowNumber++;
        y = ny;
        x = nx;
        dir = ndir;
        arr[y][x] = nowNumber; 
    }

}

console.log(solution(3));
// [
//   [1, 2, 3],
//   [8, 9, 4],
//   [7, 6, 5]
// ]

console.log(solution(4));
// [
//   [1, 2, 3, 4],
//   [12, 13, 14, 5],
//   [11, 16, 15, 6],
//   [10, 9, 8, 7]
// ]