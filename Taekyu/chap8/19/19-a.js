// 실패

const strList = ["apple", "banana", "cherry"];
const queryList = ["banana", "kiwi", "melon", "apple"];

function stringHash(str, p = 31, m = 1e9 + 9) {
  let hashValue = 0;

  for (let i = 0; i < str.length; i++) {
    let power = p ** i % m;
    const charCode = str.charCodeAt(i) - 96; // 'a'를 1로 매핑
    hashValue = (hashValue + charCode * power) % m;
  }

  return hashValue % m;
}

const solution = (strList, queryList) => {
  const resultArr = new Array(queryList.length);
  const hashtable = new Array(strList.length).fill(0);
  for (const q of queryList) {
    hashtable[stringHash(q)] = 1;
  }
  for (const value of hashtable) {
    if (value === 1) {
      resultArr.push(true);
    } else {
      resultArr.push(false);
    }
  }
  return resultArr;
};

// console.log(solution(strList, queryList));

console.log(stringHash("apple"));
console.log(stringHash("apple"));
