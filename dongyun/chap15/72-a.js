function solution(arr){
    let answer;
    const colCnt = arr[0].length;
    const dp = [...new Array(3)].map(()=> new Array(colCnt).fill(0));
    console.log(dp);
    dp[0][0] = arr[0][0]
    dp[0][1] = arr[0][1]
    dp[0][2] = arr[0][2]
    dp[0][3] = arr[0][0] + arr[0][2];

    for(let i = 0; i < colCnt; i++){
        for(let j = 0; j < 4; j++){
            
        }
    }

    return answer;
}


console.log(solution([[1, 3, 3, 2], [2, 1, 4, 1], [1, 5, 2, 3]])) // 19
// console.log(solution([[1, 7, 13, 2, 6], [2, -4, 2, 5, 4], [5, 3, 5, -3, 1]])) // 32