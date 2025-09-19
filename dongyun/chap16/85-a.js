function solution(n, stations, w) {
  var answer = 0;
  let apt = new Array(n).fill(0);

  const propagate = (num) => {
    let left = num - w;
    let right = num + w;
    if (left < 0) {
      left = 0;
    }
    if (right > n - 1) {
      right = n - 1;
    }
    apt = [
      ...apt.slice(0, left), // left 이전 부분
      ...Array(right - left + 1).fill(1), // 1로 채워진 새로운 배열 부분
      ...apt.slice(right + 1), // right 이후 부분
    ];
  };

  // 0번 인덱스 고려해서 -1
  for (const tel of stations) {
    // apt[tel - 1] = 1;
    propagate(tel - 1);
  }
  console.log(apt);

  const blankCount = [];
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    if (apt[i] === 0) {
      cnt++;
    }
    if (apt[i] !== 0) {
      blankCount.push(cnt);
      cnt = 0;
    }
    if (i === n - 1) {
      blankCount.push(cnt);
    }
  }

  const sortedCount = blankCount
    .filter((cnt) => cnt !== 0)
    .sort((a, b) => b - a);

  const maxPropa = 2 * w + 1;
  for (const cnt of sortedCount) {
    const maxed = cnt / maxPropa;

    if (cnt / maxPropa > 1) answer += Math.ceil(maxed);
    else answer++;
  }

  return answer;
}
