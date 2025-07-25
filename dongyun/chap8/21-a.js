function solution(want, number, discount) {
    var answer = 0;

    const obj = {}

    for (const [index, w] of want.entries()) {
        obj[w] = number[index];
    }

    for (let i = 0; i < 10; i++) {
        obj[discount[i]] -= 1;
        let flag = true;
        for (const key in obj) {
            if (obj[key] > 0) {
                flag = false;
                break;
            }
        }
        if (flag) answer++;
    }

    for (let j = 10; j < discount.length; j++) {
        obj[discount[j - 10]] += 1;
        obj[discount[j]] -= 1;
        let flag = true;
        for (const key in obj) {
            if (obj[key] > 0) {
                flag = false;
                break;
            }
        }
        if (flag) answer++;
    }
    return answer;
}