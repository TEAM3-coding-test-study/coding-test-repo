function solution(enroll, referral, seller, amount) {
  const nameToIdx = {};
  const parent = {};
  const profit = new Array(enroll.length).fill(0);

  // 이름 → 인덱스 매핑 및 추천인 저장
  enroll.forEach((name, i) => {
    nameToIdx[name] = i;
    parent[name] = referral[i];
  });

  // 수익 분배 함수
  function distribute(name, money) {
    if (name === "-" || money < 1) return;

    const idx = nameToIdx[name];
    const give = Math.floor(money * 0.1);
    const keep = money - give;

    profit[idx] += keep;
    distribute(parent[name], give);
  }

  // 판매 정보 처리
  for (let i = 0; i < seller.length; i++) {
    const sellerName = seller[i];
    const income = amount[i] * 100;
    distribute(sellerName, income);
  }

  return profit;
}
