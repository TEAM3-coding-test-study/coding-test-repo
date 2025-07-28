function solution(participant, completion) {
    var answer = '';
    
    participant.sort();
    completion.sort();
    
    // console.log(participant);
    // console.log(completion);
    for (const [index, player] of participant.entries()){
        if(participant[index] !== completion[index]){
            return participant[index];
        }
    }
    
    return answer;
}