function solution(enroll, referral, seller, amount) {
  var answer = [];
  let dict = {};

  for (let i = 0; i < enroll.length; i++) {
    dict[enroll[i]] = {};
    if (referral[i] === "-") dict[enroll[i]].upper = null;
    else dict[enroll[i]].upper = referral[i];
  }

  for (let i = 0; i < seller.length; i++) {
    let sellerName = seller[i];
    let ic = amount[i] * 100;
    let realCome = Math.ceil(ic * 0.9);
    dict[sellerName].income = (dict[sellerName].income || 0) + realCome;
    while (dict[sellerName].upper) {
      ic -= realCome;
      realCome = Math.ceil(ic * 0.9);
      sellerName = dict[sellerName].upper;
      dict[sellerName].income = (dict[sellerName].income || 0) + realCome;
      if (ic === realCome) break;
    }
  }

  for (let i of enroll) {
    answer.push(dict[i].income || 0);
  }
  return answer;
}

// console.log(
//   solution(
//     ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"],
//     ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"],
//     ["young", "john", "tod", "emily", "mary"],
//     [12, 4, 2, 5, 10]
//   )
// );

console.log(
  solution(
    ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"],
    ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"],
    ["sam", "emily", "jaimie", "edward"],
    [2, 3, 5, 4]
  )
);
