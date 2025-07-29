function solution(genres, plays) {
    var answer = [];

    const obj = {};

    for (let i = 0; i < genres.length; i++) {
        if (obj[genres[i]] === undefined) {
            const d = [plays[i]]
            obj[genres[i]] = d;
            // 첫번째 원소는 누적 plays
            obj[genres[i]].push(i);
            continue;
        }
        obj[genres[i]][0] += plays[i];
        obj[genres[i]].push(i);
        // 여기까지 장르별 재생 횟수 누적.
    }

    const genreOrder = {}
    const arr = []
    for (const key in obj) {
        genreOrder[obj[key][0]] = key;
        arr.push(obj[key][0]);
    }

    arr.sort((a, b) => b - a);

    for (const g of arr) {
        const songs = obj[genreOrder[g]]
        const top2 = {};
        let fir = -1; //1등 고유번호
        let sec = -2; //2등 고유번호
        top2[fir] = -10; //1등 재생횟수
        top2[sec] = -12; //2등 재생횟수
        
        for (let i = 1; i < songs.length; i++) {
            if (plays[songs[i]] > top2[fir]) {
                //밀려난 1등이 2등보다 큰지 검증
                if (top2[fir] > top2[sec]) {                   
                    sec = fir;
                    top2[sec] = top2[fir];
                }
                //1등 노래 갱신
                fir = songs[i];
                top2[fir] = plays[songs[i]];
            }
            else if (plays[songs[i]] > top2[sec]) {
                //2등 노래 갱신
                sec = songs[i];
                top2[sec] = plays[songs[i]];
            }
        }
        answer.push(fir)
        if (top2[sec] > -1 && top2[sec] !== null)
            answer.push(sec);
    }

    return answer;
}