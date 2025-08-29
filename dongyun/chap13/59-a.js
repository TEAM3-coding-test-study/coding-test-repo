function solution(numbers) {
    var answer = '';
    
    const compare = (a, b) => {
        const stringA = a.toString();
        const stringB = b.toString();
        let la = 0;
        let lb = 0;

        while(true){
            if( Number(stringA[la]) > Number(stringB[lb])){
                return -1;
            }
            else if (Number(stringA[la]) === Number(stringB[lb])){           
                if(la + 1 >= stringA.length && lb + 1>= stringB.length){
                    return 1; 
                }
                if(la + 1 < stringA.length){
                    la += 1;
                }
                if(lb + 1 < stringB.length){
                    lb += 1;
                }
            }
            else{
                return 1
            }
        }      
    }
    numbers.sort((a, b) => {
         return compare(a, b);
    });
    
    console.log(numbers)
    
    return numbers.join("");
}