function solution(n, words) {
    var answer = [];

    let flag = true;
    let loop = 0;
    const first = (i) => {
        if(i === undefined){
            console.log("아니 어떻게 i가 언디파인드")
            return "@"
        }
        else if(words[i] === undefined){
            console.log("어떻게 words가 언디파인드")
            return "#"
        }
        else{
            return words[i].at(0);   
        }
    }
    const last = (i) => words[i].at(words[i].length - 1);
    const beforeNum = (i, loop) => {
        if(i - loop > 0){
            return i - 1;
        }
        else{
            return n;
        }
    }
    
    const answered = {}
    
    Outer:while(flag){
        for(let i = 0; i < n; i++){
            // console.log("----------")
            // console.log("i : ", i, "loop : ", loop)
            // console.log("words[i + loop * n] : ", words[i + loop * n])
            // for(const a in answered){
            //     console.log(a)
            // }
            if(i === 0 && loop === 0){
                answered[words[i + loop*n]] = words[i + loop*n];
                continue;
            }
            if(answered[words[i + loop * n]] !== undefined){
                // console.log("중복 단어임", "i : ", i, ", loop : ", loop);
                flag = false;
                answer.push(i + 1);
                answer.push(loop + 1);
                break Outer;
            }     
            if(last(i + loop * n - 1) !== first(i + loop * n) && first(i + loop * n) !== "#"){
                // console.log("앞사람 끝과 다름", "i : ", i)
                flag = false;
                answer.push(i + 1);
                answer.push(loop + 1);
                break Outer;
            }      
            answered[words[i + loop * n]] = words[i + loop * n];       
            if(i + loop*n === words.length){
                answer.push(0);
                answer.push(0);
                break Outer;
            }
        }
        loop ++;
    }
    return answer;
}

// console.log(solution(3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"])) //[3,3]
console.log(solution(5, ["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"])); //[0,0]