function solution(items, weightLimit) {
    items.sort((a, b)=>{
        const [weightA, priceA] = a;
        const [weightB, priceB] = b;
        if(priceA / weightA > priceB / weightB ){
            return -1;
        }
        else{
            return 1;
        }
    });
    console.log(items);

    let leftWeight = weightLimit;
    let total = 0;
    let index = 0;
    while(leftWeight > 0){
       const itemWeight = items[index][0];
       const itemPrice = items[index][1];
       if(leftWeight > itemWeight){
        leftWeight -= itemWeight;
        total += itemPrice;
       }
       else{ //leftWeight <= itemWeight
        items[index][0] -= leftWeight;
        total += ((itemPrice / itemWeight) * leftWeight);
        leftWeight = 0;
       }
       index++;
    }

    return total;
}

console.log(solution([[10, 19], [7, 10], [6, 10]], 15)) // 27.333..
console.log(solution([[10, 60], [20, 100], [30, 120]], 50)) // 240