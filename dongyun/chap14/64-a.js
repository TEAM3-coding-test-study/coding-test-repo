function solution(n) {
    const arr = [...new Array(n)].map((_)=> new Array(n).fill(0));

    const dy = [-1, -1, -1, 0, 0, 1, 1, 1];
    const dx = [-1, 0, 1, -1, 1, -1, 0, 1];

    const determinTurn = (y, x) =>{
        
        if(y < n && x < n){

        }
        
        // 우상단 코너
        if(y >= n && x < n){
            return 
        }
    }

    const move = (y, x) =>{
        
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