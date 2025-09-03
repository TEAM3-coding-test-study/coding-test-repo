function solution(topping) {
    let result = 0;
    
    const checkKind = (arr, start, end) => {
        const toppingSet = new Set();
        for(let i = start; i < end; i++){
            if(!toppingSet.has(arr[i])){
                toppingSet.add(arr[i]);
            }
        }
        return toppingSet.size;
    }
    
    for(let i = 0; i < topping.length; i++){
    
        const bro = checkKind(topping, 0, i);
        const culsu = checkKind(topping, i, topping.length);
        
        if(bro === culsu){
            result++;
        }
    }
        
    return result;
}