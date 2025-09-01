function solution(s) {
    var answer = [];
    const stack = [];
    const arr = [];
    
    let temp = [];
    for (const char of s) {
        if (char === "{") {
            stack.push(char);
            continue;
        }
        if (char === "}") {
            stack.pop();
            if (stack.length !== 0) {
                arr.push(temp);
                temp ;
                continue;
            }
            continue;
        }
        if(temp.length === 0 && char === ",")
            continue;
        temp.push(Number(char));
    }
    
    console.log(arr)
    
    const sortedArr = arr.map((element) => {
        return [...element].filter((e)=>e!== ",").map((n) => Number(n))
    }).sort((a, b) => {
        return a.length > b.length ? 1 : -1
    })
    
    for(const t of sortedArr){
       answer.push(t.find((element) => !answer.includes(element)));
    }
    
    // console.log(sortedArr);
    
    return answer;
}