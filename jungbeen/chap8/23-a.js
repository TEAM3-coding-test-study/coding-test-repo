function solution(genres, plays) {
  var answer = [];
  let whereObj = new Map();
  let gens = [];

  for (let i = 0; i < genres.length; i++) {
    if (whereObj.has(genres[i])) {
      let idx = whereObj.get(genres[i]);
      gens[idx].total += plays[i];
      if (!gens[idx].secondIdx || plays[i] > plays[gens[idx].secondIdx]) {
        if (plays[i] > plays[gens[idx].firstIdx]) {
          gens[idx].secondIdx = gens[idx].firstIdx;
          gens[idx].firstIdx = i;
        } else {
          gens[idx].secondIdx = i;
        }
      }
    } else {
      whereObj.set(genres[i], gens.length);
      gens.push({ total: plays[i], firstIdx: i });
    }
  }

  gens.sort((a, b) => b.total - a.total);
  for (let i = 0; i < gens.length; i++) {
    answer.push(gens[i].firstIdx);
    if (gens[i].secondIdx !== undefined) answer.push(gens[i].secondIdx);
  }

  return answer;
}

console.log(
  solution(
    ["classic", "pop", "classic", "classic", "pop", "J"],
    [500, 600, 150, 800, 2500, 8000]
  )
);
