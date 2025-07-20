function solution(progresses, speeds) {
    var answer = [];
    
    const q = [];
    
    for(let i = 0; i < progresses.length; i++){
        progresses[i] += speeds[i];
    }
    
    for(let i = 0; i < progresses.length; i++){
        if(progresses[i] >= 100){
            progresses.shift();      
            speeds.shift();
            continue;
        }
        break;
    }
    
    while(true){
                if(progresses[i] >= 100){
            progresses.shift();      
            speeds.shift();
            continue;
        }
        break;
    }
    
    
    return answer;
}