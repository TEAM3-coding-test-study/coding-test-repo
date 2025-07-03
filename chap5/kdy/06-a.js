function solution(N, stages) {
    var answer = [];
    
    const failCal = new Array(N).fill(0);
    
    stages.sort((a,b)=>a-b)
    console.log(stages)
    
    for(const[i, stage] of stages.entries()){
        failCal[stage] += 1;
        if(i+1 < stages.length && stages[i+1] > stage){
            console.log("다음 스테이지 등장", stages[i+1] ,">", stage)
            console.log("현재 failCal[",stage,"] : ", failCal[stage])
            console.log("stages.length - i = ", stages.length - i)
            failCal[stage] = failCal[stage] / (stages.length - i)
        }
    }
    
    console.log(failCal)
    
    return answer;
}