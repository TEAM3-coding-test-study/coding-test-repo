function solution(phone_book) {
  phone_book.sort();
  var answer = true;

  const usedNum = new Set();

  const getHash = (num) => {
    let cur = "";
    for (let i = 0; i < num.length; i++) {
      cur += num[i];
      //   console.log("cur: ", cur);
      if (usedNum.has(cur)) {
        // console.log("접두사 존재!");
        answer = false;
        return false;
      }
    }
    usedNum.add(num);
    return true;
  };

  for (const num of phone_book) {
    if (!getHash(num)) return false;
  }

  return answer;
}
