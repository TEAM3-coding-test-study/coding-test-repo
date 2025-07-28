function stringHash(s) {
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    let sx = s.charCodeAt(i);
    sum += sx * 31 ** i;
  }
  return sum % 1000000007;
}

function solution(stringList, queryList) {
  let arr = {};
  let answer = [];
  for (let i of stringList) {
    const val = stringHash(i);
    arr[val] = 1;
  }

  console.log(arr);

  for (let i of queryList) {
    let qval = stringHash(i);
    if (arr[qval] === 1) answer.push(true);
    else answer.push(false);
  }

  return answer;
}

console.log(
  solution(["apple", "banana", "cherry"], ["banana", "kiwi", "melon", "apple"])
);
