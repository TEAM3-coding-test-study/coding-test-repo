export default function solution(arr, target) {
    const answer = new Array(target);
    const hashing = (number) =>{
        // target 5,인데 1, 4가 오면 각각 1번,4번. 1, 5-1이 채워지므로 true?
        return number % target;
    }

    for(const item of arr){
        if(item >= target)
            continue;
        const hashed = hashing(item)
        answer[hashed] = item;        
        if(answer[target - hashed] && answer[hashed] !== answer[target - hashed]){
            // console.log(`answer[hashed] = answer[${hashed}] = ${answer[hashed]}`)
            // console.log(`answer[target - hashed] = answer[${target} - ${hashed}] = answer[${target - hashed}] = ${answer[target - hashed]}`)
            // console.log("탈출!!!")
             console.log(answer)
            return true
        }
    }
    console.log(answer)
    return false;
}

solution([2, 3, 5, 9], 10);
// solution([2, 3, 5, 9, 15, 21, 34, 78, 1202, 4012, 4400, 5120, 8888, 9123, 9999], 9157)