function solution(genres, plays) {
    var answer = [];

    const obj = {};

    for (let i = 0; i < genres.length; i++) {
        if (obj[genres[i]] === undefined) {
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

    const genereOrder = Object.keys(obj).sort((a, b) => {
        return obj[a][0] - obj[b][0];
    })
    
    
    const songsOrder = {};
    
    for(const g of genereOrder){
        console.log(obj[g])
        const arr = [...obj[g]];
        console.log(arr)
        songsOrder = arr.sort((a, b) => {
            return plays[b] - plays[a];
        })
        
    }
        
    return answer;
}