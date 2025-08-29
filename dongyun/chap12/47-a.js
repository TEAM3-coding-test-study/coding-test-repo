function solution(N){
    if(N < 4)
        return [];
    let answer = [];

    const findTen = (now, sum, group) => {
        console.log(group)
        if(now > N)
            return;
        if(sum < 10){
            for(let i = now + 1; i < 10; i++){
                findTen(i, sum + i, [...group, i]);
            }
        }
        else if(sum === 10){
            console.log(group)
            answer.push(group);
            return;
        }
        else
            return;
    }

    findTen(0, 0, []);

    console.log("-----------------")
    return answer;
}

// console.log(solution(5)) // 1234, 145, 235
// console.log(solution(2)) // []
console.log(solution(7)) // 1234, 127 136 145 235 37 46