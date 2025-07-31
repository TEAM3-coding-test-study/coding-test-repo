function solution(enroll, referral, seller, amount) {
    var answer = [];

    const earn = {};
    const parent = {};
    parent["-"] = "CENTER";
    earn["-"] = 0;
    earn["CENTER"] = 0;

    const uploading = (child, money) => {
        // if (money < 10) {
        if (money < 1) {
            return;
        }
        if (earn[parent[child]] === undefined) {
            earn[parent[child]] = 0;
        }
        if (earn[child] === undefined) {
            earn[child] = 0;
        }
        const tenPercent = Math.floor(money / 10);
        const nintyPercent = money - tenPercent;
        uploading(parent[child], tenPercent);
        // console.log(child, "의 추천인", parent[child], "에게", money, "의 10퍼센트인", tenPercent);

        earn[child] += nintyPercent;
        // console.log(child, "에게", money, "의 90퍼센트인", nintyPercent);
    }

    for (const [index, name] of referral.entries()) {
        parent[enroll[index]] = name;
    }

    for (const [index, name] of seller.entries()) {
        uploading(name, amount[index] * 100);
    }

    for (const name of enroll) {
        // console.log(name, earn[name])
        if (earn[name] === undefined)
            earn[name] = 0;
        answer.push(earn[name]);
    }

    return answer;
}