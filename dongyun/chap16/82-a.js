function solution(d, budget) {
    var answer = 0;
    let leftBudget = budget;
    d.sort();
    console.log(d);
    for(const m of d){        
        if(leftBudget >= m){
            leftBudget -= m;
            console.log(m);
            answer++;
        }
    }
    return answer;
}

console.log(solution([100, 11, 120] , 130))