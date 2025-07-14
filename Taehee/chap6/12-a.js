function solution(prices) {
    var answer = [];
    var count = 0;
    
    for(let i = 0 ; i<prices.length;i++){
        count=0;
        for(let n =i+1 ; n<prices.length;n++){
            if(prices[i]<=prices[n]){
                count++;
            }else{
                count++;
                break;
            }
        }
        answer.push(count);
    }
    return answer;
}