function solution(n) {
    const dp = new Array(n + 1).fill(0);
    
    if (n >= 1) {
        dp[1] = 1;
    }
    
    // 문제에서 요구하는 나머지 값 (문제마다 다를 수 있으니 확인 필수!)
    const mod = 1234567;
    
    for (let i = 2; i <= n; i++) {
        // 덧셈을 할 때마다 나머지를 구해줘서 숫자가 커지는 것을 방지합니다.
        dp[i] = (dp[i - 1] + dp[i - 2]) % mod;
    }
    
    return dp[n];
}