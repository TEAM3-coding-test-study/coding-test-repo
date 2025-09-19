function solution(n, stations, w) {
  var answer = 0;
  let start = 1;
  let end = 0;
  for (let i = 0; i <= stations.length; i++) {
    if (i != 0) {
      start = stations[i - 1] + w + 1;
    }
    if (i == stations.length) {
      end = n;
    } else {
      end = stations[i] - w - 1;
    }
    if (start <= end) {
      answer += Math.ceil((end - start + 1) / (2 * w + 1));
    }
  }
  return answer;
}
