function solution(brown, yellow) {
    
    const total = brown + yellow;
    let col = 3;
    while(true){
        if(total % col === 0){
            const row = total / col;    
            console.log(row, col);
            if(row * 2 + ((col - 2) * 2 ) === brown){
                return [row, col];
            }
        }
        col += 1;
    }
}