function solution(participant, completion) {
  let answer = "";
  let h = new Map();

  for (let i of participant) {
    if (h.has(i)) {
      const val = h.get(i);
      h.set(i, val + 1);
    } else h.set(i, 1);
  }

  for (let i of completion) {
    const pcount = h.get(i);
    if (pcount === 1) h.delete(i);
    else h.set(i, pcount - 1);
  }

  //   answer = h.keys().next().value;
  answer = [...h.keys()][0];

  return answer;
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
console.log(
  solution(
    ["marina", "josipa", "nikola", "vinko", "filipa"],
    ["marina", "josipa", "nikola", "filipa"]
  )
);
console.log(
  solution(["mislav", "stanko", "mislav", "ana"], ["mislav", "stanko", "ana"])
);
