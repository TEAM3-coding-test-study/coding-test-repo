function solution(n,a,b)
{
    let roundCnt = 1;
    
    while(a !== b){
        console.log(a, b);
        if(a % 2 !== 0)
            a++;
        if(b % 2 !== 0)
            b++;
        
        a = a / 2;
        b = b / 2;
        
        roundCnt++;
    }
    
    return roundCnt - 1;
}