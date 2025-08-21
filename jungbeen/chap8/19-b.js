function stringHash(s) {
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    let sx = s.charCodeAt(i);
    sum += sx * 31 ** i;
  }
  return sum % 1000000007;
}

function solution(stringList, queryList) {
  const h = new Map();
  const answer = [];

  for (let i of stringList) {
    h.set(stringHash(i), true);
  }

  for (let i of queryList) {
    let val = stringHash(i);
    if (h.has(val)) answer.push(true);
    else answer.push(false);
  }

  return answer;
}

console.log(
  solution(["apple", "banana", "cherry"], ["banana", "kiwi", "melon", "apple"])
);
