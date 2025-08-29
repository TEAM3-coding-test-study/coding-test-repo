function solution(s) {
  const included = new Set();
  const answer = [];
  let nums = s.slice(2, -2).split("},{");
  nums = nums.sort((a, b) => a.length - b.length);

  for (let str of nums) {
    let n = str.split(",");
    for (let i of n) {
      if (included.has(i)) continue;
      else {
        included.add(i);
        answer.push(i);
      }
    }
  }

  return Array.from(answer, Number);
}

console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}"));
