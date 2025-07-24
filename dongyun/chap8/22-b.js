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

    const genreOrder = {}
    const arr = []
    for (const key in obj) {
        genreOrder[obj[key][0]] = key;
        arr.push(obj[key][0]);
    }

    arr.sort((a, b) => b - a);

    for (const g of arr) {
        console.log("g : ", g);
        const songs = obj[genreOrder[g]]
        const top2 = {};
        let fir = -1;
        let sec = -1;
        for (let i = 1; i < songs.length; i++) {
            console.log("songs[i] : ", songs[i]);
            if (plays[songs[i]] > fir) {
                //밀려난 1등이 2등보다 큰지 검증
                if (plays[songs[i]] > sec) {
                    sec = plays[songs[i]];
                    top2[sec] = songs[i];
                    continue;
                }

                //1등 노래 갱신
                fir = plays[songs[i]];
                top2[fir] = songs[i];
                console.log(top2[fir])
                continue;
            }
            else if (plays[songs[i]] > sec) {
                sec = plays[songs[i]];
                top2[sec] = songs[i];
                continue;
            }
        }
        answer.push(top2[fir])
        if (top2[sec] !== -1 && top2[sec] !== null)
            answer.push(top2[sec]);
    }

    return answer;
}