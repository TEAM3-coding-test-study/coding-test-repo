function solution(n, info) {
    let maxDiff = 0;
    let answer = [-1];

    // 현재 탐색 중 과녁, 남은 화살 수, 라이언의 화살 정보
    function dfs(idx, arrow, lionInfo) {
        // 베이스 케이스: 모든 과녁에 대한 결정을 마친 경우
        if (idx === 11) {
            if (arrow > 0) {
                lionInfo[10] += arrow; // 남은 화살은 0점 과녁에 모두 쏜다
            }
            // 점수 계산
            let apeachScore = 0;
            let lionScore = 0;
            for (let i = 0; i < 11; i++) {
                if (info[i] === 0 && lionInfo[i] === 0) {
                    continue;
                }
                
                if (info[i] >= lionInfo[i]) {
                    apeachScore += (10 - i);
                } else {
                    lionScore += (10 - i);
                }
            }

            const diff = lionScore - apeachScore;

            // 최고 점수 차이가 나오면 갱신
            if (diff > maxDiff) {
                maxDiff = diff;
                answer = [...lionInfo];
            } 
            // 점수 차이가 같을 경우, 낮은 점수 과녁에 더 많이 쏜 경우로
            else if (diff === maxDiff && diff > 0) {
                // 낮은 점수니까 배열을 뒤에서부터 비교
                for (let i = 10; i >= 0; i--) {
                    if (lionInfo[i] > answer[i]) {
                        answer = [...lionInfo];
                        break;
                    } else if (lionInfo[i] < answer[i]) {
                        break;
                    }
                }
            }

            return;
        }

        // 라이언이 점수를 가져가는 경우(화살이 충분)
        if (arrow >= info[idx] + 1) {
            lionInfo[idx] = info[idx] + 1;
            dfs(idx + 1, arrow - lionInfo[idx], lionInfo);
        }

        // 라이언이 점수를 포기하는 경우
        lionInfo[idx] = 0;
        dfs(idx + 1, arrow, lionInfo);
    }

    dfs(0, n, Array(11).fill(0));

    // 점수 차이가 0 이하일 경우, 라이언이 이길 수 없으므로 [-1] 반환
    if (maxDiff <= 0) {
        return [-1];
    }
    
    return answer;
}