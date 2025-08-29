function solution(n) {
  var answer = "";
  let str = n.toString();
  const arr = new Array(10).fill(0);

  for (let i of str) arr[+i]++;

  for (let i = 9; i >= 0; i--) {
    if (arr[i] !== 0) {
      for (let j = 0; j < arr[i]; j++) answer += i.toString();
    }
  }

  return +answer;
}

console.log(solution(118372));
