function solution(k, tangerine) {
  var answer = 0;
  let i = 0;
  let idx = 0;
  let array = [1];
  tangerine.sort((a, b) => {
    return b - a;
  });
  for (let j = 1; j < tangerine.length; j++) {
    if (tangerine[j] != tangerine[j - 1]) {
      idx++;
      array[idx] = 1;
    } else {
      array[idx]++;
    }
  }
  array.sort((a, b) => {
    return b - a;
  });
  while (k > 0) {
    k -= array[i];
    i++;
    answer++;
  }
  return answer;
}
