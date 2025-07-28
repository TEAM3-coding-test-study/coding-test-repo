function solution(genres, plays) {
  var answer = [];
  let gen = {};
  let pl = {};

  for (let i = 0; i < genres.length; i++) {
    if (!(genres[i] in gen)) {
      gen[genres[i]] = [];
      pl[genres[i]] = 0;
    }
    gen[genres[i]].push([i, plays[i]]);
    pl[genres[i]] += plays[i];
  }

  const sortedGen = Object.keys(pl).sort((a, b) => pl[b] - pl[a]);
  for (let i of sortedGen) {
    gen[i].sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : b[1] - a[1]));
    answer.push(...gen[i].slice(0, 2).map(([num]) => num));
  }

  return answer;
}

console.log(
  solution(
    ["classic", "pop", "classic", "classic", "pop", "J"],
    [500, 600, 150, 800, 2500, 8000]
  )
);
