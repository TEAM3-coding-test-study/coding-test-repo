function solution(N, stages) {
    // var answer = [];

    const failCal = new Array(N).fill(0);
    const stageIndex = [...new Array(N)].map((_, i)=> i+1)
    console.log(stageIndex)
    stages.sort((a,b)=>a-b)

    const stageSet = [...new Set(stages)];
    let totalPlayer = stages.length;
    
    for(const[i, stage] of stageSet.entries()){
        if(stage <= N){ 
            const a = stages.filter((s) => s === stage).length
            const b = totalPlayer
            console.log(a, b)
            failCal[stage-1] = a/b;
            totalPlayer -= a;
        }
    }
        
    console.log(failCal)
    
    const result = Object.entries(failCal).sort((a, b)=> b[1] - a[1])
    const answer = result.map((v) => Number(v[0]) + 1);
    
    return answer;
}