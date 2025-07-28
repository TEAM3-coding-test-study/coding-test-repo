function solution(participant, completion) {
    const obj = {};
    for (const player of participant) {
        // 참가자들의 이름-명수 골 해시 테이블 만들기
        if(obj[player]){
            obj[player]++;
        }
        else{
            obj[player] = 1;
        }
    }

    for(const c of completion){
        obj[c]--;
    }

    for(const key in obj){
        if(obj[key] > 0){
            return key;
        }
    }
}