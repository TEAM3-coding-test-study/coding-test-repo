function solution(arr1, arr2) {
    var answer = [...new Array(arr1.length)].map((_, i)=> new Array(arr2[0].length).fill(0));
    
    const mcnt = arr1[0].length;
    
    for(let i = 0; i < arr1.length; i++){
        //arr1의 행 반복
        for(let j = 0; j < arr2[0].length; j++){
            //arr2의 열 반복
            let sum = 0;
            for(let k = 0; k < mcnt; k++){
                sum += arr1[i][k] * arr2[k][j]
            }
            answer[i][j] = sum;
        }
    }
    

    return answer;
}