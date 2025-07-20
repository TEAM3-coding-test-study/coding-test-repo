function solution(cards1, cards2, goal) {
    const hand = [];
    let flag = true;
    
    for(const g of goal){
        if(cards1[0] === g){
           const addedCard = cards1.shift();
            hand.push(addedCard);
            continue;
        }
        else if(cards2[0] === g){
            const addedCard = cards2.shift();
            hand.push(addedCard);
            continue;
        }
        flag = false;
        break;
    }
    
    if(flag){
        return "Yes";
    }
    return "No"
}