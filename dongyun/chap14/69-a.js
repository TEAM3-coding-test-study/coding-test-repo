function solution(keyinput, board) {
    var answer = [];
    
    const yCenter = Math.floor(board[1] / 2  );
    const xCenter = Math.floor(board[0] / 2 );
    
    
    let y = yCenter;
    let x = xCenter;
    
    const canMove = (ny, nx) =>{
        if(ny < 0 || ny >= board[1] || nx < 0 || nx >= board[0]){
            return false;
        }
        return true;
    }
    
    for(const command of keyinput){
        if(command === "left"){
            if(canMove(y, x - 1)){
                x -= 1;
            }
        }
        if(command === "right"){
            if(canMove(y, x + 1)){
                x += 1;
            }
        }
        if(command === "up"){
            if(canMove(y - 1, x)){
                y -= 1;
            }
        }
        if(command === "down"){
            if(canMove(y + 1, x)){
                y += 1;
            }
        }
    }
    console.log(x, y)
    console.log(xCenter, yCenter);
    
    return [x - xCenter, yCenter - y];
}