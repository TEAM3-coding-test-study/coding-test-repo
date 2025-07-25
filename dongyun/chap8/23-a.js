function solution(genres, plays) {
    var answer = [];
    
    const obj = {};
    
    for(let i = 0; i < genres.length; i++){
        if(obj[genres[i]] === undefined){
            const d = [0]
            obj[genres[i]] = d;
            // 첫번째 원소는 누적 plays
            obj[genres[i]].push(i);
            continue;
        }
        obj[genres[i]][0] += plays[i];
        obj[genres[i]].push(i);
        // 여기까지 장르별 재생 횟수 누적.
    }
    
    const genreOrder = []
    for(const key in obj){
        //재생 횟수 합에 따른 장르 정렬.
        genreOrder.push(obj[key][0])
    }
    genreOrder.sort((a, b) => b - a);
    genreOrder.map((g)=>g)
    
    return answer;
}