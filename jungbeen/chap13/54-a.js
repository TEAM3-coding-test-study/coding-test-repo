function solution(s) {
  const arr = new Array(26).fill(0);
  let answer = "";

  for (let i of s) arr[i.charCodeAt(0) - 97]++;

  for (let i = 0; i < 26; i++) {
    if (arr[i] > 0) {
      for (let j = 0; j < arr[i]; j++) answer += String.fromCharCode(i + 97);
    }
  }

  return answer;
}

console.log(solution("algorithm"));
