function hash(str) {
  const p = 31;
  const m = 1000000007;
  let hashValue = 0;
  for (let i = 0; i < str.length; i++) {
    hashValue = (hashValue * p + str.charCodeAt(i)) % m;
  }
  return hashValue;
}

function solution(stringList, queryList) {
  const hashTable = stringList.map((str) => hash(str));
  const results = [];
  for (const query of queryList) {
    const queryHash = hash(query);
    if (hashTable.includes(queryHash)) {
      results.push("true");
    } else {
      results.push("flase");
    }
  }
  return results;
}

console.log(
  solution(["apple", "banana", "cherry"], ["banana", "kiwi", "melon", "apple"])
);
