function solution(n) {
    var answer = 0;
    const mod = 1000000007
    const dp = [];
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 2;
    
    const tile = (n) => {
        if(dp[n]){
            // console.log("n : ", n, " 이미 있음 dp[n] : ", dp[n]);
            return dp[n];
        }
        dp[n] = (tile(n-2) + tile(n-1)) % mod;
        // console.log("n : ", n, " 없어서 추가 dp[n] : ", dp[n]);
        return dp[n];
    }
    
    return tile(n);
}