function solution(topping) {
    let result = 0;
    
    const broSet = new Set();
    const culsuSet = new Set(topping);
    const allToppingKind = new Set(topping).size;
    
    const culsu = [...topping];
    
    for(const topp of topping){
        if(!broSet.has(topp)){
            broSet.add(topp);
        }
        const outed = culsu.shift()
        if(!culsu.includes(outed)){
            culsuSet.delete(outed);
           }
        if(broSet.size === culsuSet.size) {
            result++;
        }
    }
    
    return result;
}