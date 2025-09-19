function solution(k, tangerine) {
  var answer = 0;
  let i = 0;

  //계수 정렬이용
  let array = new Array(10000001).fill(0);
  for (const n of tangerine) {
    array[n]++;
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
