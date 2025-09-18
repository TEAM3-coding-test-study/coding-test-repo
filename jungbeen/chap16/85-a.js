function solution(n, stations, w) {
  var answer = 0;
  let nojunpa = 1;
  let len = 0;
  const startend = stations.map((s) => [s - w, s + w]);
  for (let i = 0; i < startend.length; i++) {
    len = startend[i][0] - nojunpa;
    if (len > 0) {
      answer += Math.ceil(len / (2 * w + 1));
    }
    nojunpa = startend[i][1] + 1;
  }

  if (nojunpa <= n) {
    answer += Math.ceil((n - nojunpa + 1) / (2 * w + 1));
  }

  return answer;
}

console.log(solution(6, [3], 2));
