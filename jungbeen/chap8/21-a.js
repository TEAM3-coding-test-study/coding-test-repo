function solution(want, number, discount) {
  var answer = 0;
  let h = new Map();
  let geth = new Map();

  for (let i = 0; i < want.length; i++) {
    h.set(want[i], number[i]);
  }

  for (let i = 0; i < 10; i++) {
    let name = discount[i];
    if (geth.has(name)) {
      const val = geth.get(name);
      geth.set(name, val + 1);
    } else geth.set(name, 1);
  }

  for (let i = 9; i < discount.length; i++) {
    let ks = [...h.keys()];

    for (let j = 0; j < ks.length; j++) {
      if (!geth.has(ks[j])) break;
      if (h.get(ks[j]) !== geth.get(ks[j])) break;
      if (j === ks.length - 1) answer++;
    }

    if (i !== discount.length - 1) {
      let bye = discount[i - 9];
      let bval = geth.get(bye);
      geth.set(bye, bval - 1);
      let hi = discount[i + 1];
      if (geth.has(hi)) {
        let hval = geth.get(hi);
        geth.set(hi, hval + 1);
      } else geth.set(hi, 1);
    }
  }

  return answer;
}

console.log(
  solution(
    ["banana", "apple", "rice", "pork", "pot"],
    [3, 2, 2, 2, 1],
    [
      "chicken",
      "apple",
      "apple",
      "banana",
      "rice",
      "apple",
      "pork",
      "banana",
      "pork",
      "rice",
      "pot",
      "banana",
      "apple",
      "banana",
    ]
  )
);
