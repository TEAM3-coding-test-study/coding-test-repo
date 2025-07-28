function solution(id_list, report, k) {
    var answer = [];

    const whoReport = {};
    const cntReport = {};

    for (const [index, rHistory] of report.entries()) {
        const [reporter, reported] = rHistory.split(" ");
        // 신고한 uid에게 신고당한 uid 배열 할당
        if (whoReport[reporter] === undefined) {
            const arr = [];
            whoReport[reporter] = arr;
        }
        // 처음 신고 당한 uid 초기화
        if (cntReport[reported] === undefined) {
            cntReport[reported] = 0;
        }

        //한 사람이 중복 신고 체크
        if (whoReport[reporter].includes(reported)) {
            //skip
        }
        else {
            cntReport[reported] += 1;
            whoReport[reporter].push(reported);
        }
    }

    for (const user of id_list) {
        let mailCnt = 0;
        // console.log(whoReport[user])
        if (whoReport[user] !== undefined) {
            const arr = whoReport[user];
            for (const rid of arr) {
                if (cntReport[rid] >= k)
                    mailCnt++;
            }
        }

        answer.push(mailCnt);
    }

    return answer;
}