function solution(answers) {
    var answer = [];
    var score = [0, 0, 0];
      
    var s2 = [2, 1, 2, 3, 2, 4, 2, 5];
    var s3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    
    const std1 = (index) =>{
        return index % 5 + 1;
    }
    const std2 = (index) =>{
        return s2[index % 8]
    }
    const std3 = (index) => {
        return s3[index%10]
    }
    
    let max = 0;
    answers.map((test,index)=>{
        if(test === std1(index)){
            score[0] += 1;
            if(score[0] > max)
                max = score[0]
        }
        if(test === std2(index)){
            score[1] += 1;
            if(score[1] > max)
                max = score[1]
        }
            
        if(test === std3(index)){
            score[2] += 1;
            if(score[2] > max)
                max = score[2]
        }
            
    })
    score.map((s, index)=>{
        if(s == max)
            answer.push(index+1);
    })
    return answer;
}