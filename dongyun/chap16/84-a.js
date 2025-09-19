function solution(k, tangerine) {
  var answer = 0;

  tangerine.sort((a, b) => a - b);
  console.log(tangerine);

  const countArray = [];
  let last = 0;
  let cnt = 1;
  for (let i = 0; i <= tangerine.length; i++) {
    if (i === tangerine.length) {
      countArray.push(cnt);
      continue;
    }
    if (last !== tangerine[i]) {
      last = tangerine[i];
      countArray.push(cnt);
      cnt = 1;
      continue;
    }
    cnt++;
  }
  // console.log(countArray);
  const sorted = countArray
    .filter((cnt, index) => index !== 0)
    .sort((a, b) => b - a);
  // console.log(sorted);
  let index = 0;
  while (k > 0) {
    if (k >= sorted[index]) {
      k -= sorted[index];
      index++;
      answer++;
      continue;
    }
    // k < countArray[index]
    k = 0;
    answer++;
  }

  return answer;
}
