function solution(dirs) {
    var answer = 0;
    
    const commands = dirs.split('');
    let pos = {x:0, y:0};
    
    const roads = [];
    
    for(const [i, command] of commands.entries()){
        // console.log(i+1, "번째 명령")
        const prevPos = {x: pos.x, y: pos.y}
        let isMoved = false;
        
        if(command === 'U' && pos.y <= 4){
            // console.log("이동 성공")
            pos.y += 1;
            isMoved = true;
        }
        if(command === 'D' && pos.y >= -4){
            // console.log("이동 성공")
            pos.y -= 1;
            isMoved = true;
        }
        if(command === 'R' && pos.x <= 4){
            // console.log("이동 성공")
            pos.x += 1;
            isMoved = true;
        }
        if(command === 'L' && pos.x >= -4){
            // console.log("이동 성공")
            pos.x -= 1;
            isMoved = true;
        }
        
        const newRoad = {
            prevPosX: prevPos.x,
            prevPosY: prevPos.y,
            posX: pos.x,
            posY: pos.y
        }
        
        if(isMoved){
        
        let isDupRoad = false;
                
        for(const [j, road] of roads.entries()){
            if(road.prevPosX === newRoad.prevPosX && 
              road.prevPosY === newRoad.prevPosY && 
              road.posX === newRoad.posX && 
              road.posY === newRoad.posY){
              isDupRoad = true;       
                // console.log("완전 일치 중복")
            }
            if(road.prevPosX === newRoad.posX && 
              road.prevPosY === newRoad.posY && 
              road.posX === newRoad.prevPosX && 
              road.posY === newRoad.prevPosY){
                isDupRoad = true;
                // console.log("역방향 중복")
            }
                 
        }
        if(!isDupRoad){
            // console.log("새로운 길 탐색 성공")
            answer += 1;
            roads.push(newRoad)
        }
            
        }
        
    }
    
    

    
    return answer;
}