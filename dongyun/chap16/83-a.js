function solution(people, limit) {
    var answer = 0;
    
    people.sort((a, b)=>a-b);
    
    const headCount = people.length;
    let leftHeadCount = headCount;
    let front = 0;
    let back = headCount - 1;
    while(leftHeadCount > 0){
        const pairWeight = people[front] + people[back]
        if(pairWeight <= limit){
            answer++;
            leftHeadCount -= 2;
            front++;
            back--;
            continue;
        }
    
        leftHeadCount--;
        answer++;
        back--;
    }
    
    
    return answer;
}