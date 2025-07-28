const c1 = ["leo", "kiki", "eden"];
const c2 = ["eden", "kiki"];

const a1 = ["marina", "josipa", "nikola", "vinko", "filipa"];
const a2 = ["josipa", "filipa", "marina", "nikola"];

const b1 = ["mislav", "stanko", "mislav", "ana"];
const b2 = ["stanko", "ana", "mislav"];

function polynomialHash(str) {
  const p = 31;
  const m = 1_000_000_007;

  let hashValue = 0;
  for (let i = 0; i < str.length; i++) {
    hashValue = (hashValue * p + str.charCodeAt(i)) % m;
  }
  return hashValue;
}

const solution = (participant, completion) => {
  const hashTable = {};
  for (const c of completion) {
    hashTable[polynomialHash(c)] = 1;
  }

  //   console.log("test:", hashTable[polynomialHash(completion[0])]);

  for (const p of participant) {
    if (!hashTable[polynomialHash(p)]) {
      return p;
    } else {
      delete hashTable.polynomialHash(p);
    }
  }
};

console.log(solution(a1, a2));
