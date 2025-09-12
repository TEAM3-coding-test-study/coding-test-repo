function solution(n) {
    var answer = 0;
    
    const dp = [];
    
    dp[0] = 1;
    dp[1] = 1;
    
    const fibo = (n) =>{
       if(n === 0 || n === 1){
           return dp[1];
       }
        if(dp[n])
            return dp[n];
        else{
            dp[n] = fibo(n-1) + fibo(n-2);
            return dp[n];
        }
    }
    answer = fibo(n - 1);
    return answer;
}