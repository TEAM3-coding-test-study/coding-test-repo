
export default function solution(N, K) {
    let answer = 0;

    const q = [...new Array(N)].map((_, i) => i + 1);

    while (q.length > 1) {
        for (let i = 1; i <= N; i++) {
            const temp = q.shift();
            if (i !== K) {
                q.push(temp);
                continue;
            }
            // console.log(q);
            break;
        }
    }
    answer = q[0];
    return answer;
}

// console.log(solution(5, 2));