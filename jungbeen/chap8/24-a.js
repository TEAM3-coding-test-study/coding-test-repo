function solution(id_list, report, k) {
  var answer = [];
  let singoeds = {};
  let singosCnt = {};
  let blackList = [];
  let reportSet = [...new Set(report)];

  for (let s of reportSet) {
    let [singo, singoed] = s.split(" ");

    if (!(singoed in singoeds)) {
      singoeds[singoed] = [];
    }

    singoeds[singoed].push(singo);

    if (singoeds[singoed].length === k) blackList.push(singoed);
  }

  for (let i of blackList) {
    let singoArr = singoeds[i];
    for (let j of singoArr) {
      if (j in singosCnt) singosCnt[j]++;
      else singosCnt[j] = 1;
    }
  }

  for (let i of id_list) {
    if (i in singosCnt) {
      answer.push(singosCnt[i]);
    } else {
      answer.push(0);
    }
  }
  return answer;
}

console.log(
  solution(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2
  )
);
