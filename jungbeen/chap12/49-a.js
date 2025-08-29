function repeating(arr, cnt, hp) {
  let narr = arr.filter((x) => x[0] <= hp);
  console.log(hp, narr);

  if (narr.length === 0) return cnt;

  let cnt1 = repeating(narr.slice(1), cnt + 1, hp - narr[0][1]);
  let cnt2 = repeating(narr.slice(1), cnt, hp);
  return cnt1 > cnt2 ? cnt1 : cnt2;
}

function solution(k, dungeons) {
  return repeating(dungeons, 0, k);
}

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
);
