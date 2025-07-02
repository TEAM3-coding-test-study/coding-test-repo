function solution(numbers) {
    var answer = [];
    
    numbers.map((num, index)=>{
        numbers.map((num2, index2)=>{
            if(index != index2){
                answer.push(num + num2)
            }
        })
    })
    
    answer = [...new Set(answer)].sort((a,b)=> a - b);
    console.log(answer)
    return answer;
}