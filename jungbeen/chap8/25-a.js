function combination(arr, n) {
  if (n === 1) return arr.map((v) => [v]);

  let result = [];

  arr.forEach((now, idx, ori) => {
    let rest = arr.slice(idx + 1);
    let comres = combination(rest, n - 1);
    let resarr = comres.map((c) => [now, ...c]);
    result.push(...resarr);
  });

  return result;
}

function solution(orders, course) {
  var answer = [];

  for (let c of course) {
    let resarr = [];
    let hash = {};

    for (let o of orders) {
      let ordered = o.split("").sort();
      resarr.push(...combination(ordered, c));
    }

    for (let i of resarr) {
      let istring = i.join("");
      hash[istring] = (hash[istring] || 0) + 1;
    }

    let max = Math.max(...Object.values(hash));
    for (let m of Object.entries(hash)) {
      if (m[1] > 1 && m[1] === max) answer.push(m[0]);
    }
  }

  return answer.sort();
}

console.log(
  solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4])
);
