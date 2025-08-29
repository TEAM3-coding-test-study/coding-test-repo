function solution(array, commands) {
    var answer = [];
    
    for(const command of commands){
        const [i, j, k] = command;
        const newArr = [];
        for(let idx = i; idx <= j; idx++){
            newArr.push(array[idx - 1]);
        }
        newArr.sort((a, b)=> a - b);        
        answer.push(newArr[k-1]);
    }
    
    return answer;
}