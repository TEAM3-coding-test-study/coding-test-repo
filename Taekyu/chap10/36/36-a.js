const phone_book = ["119", "97674223", "1195524421"];
const pb2 = ["123", "456", "789"];
const pb3 = ["12", "123", "1235", "567", "88"];
const pb4 = ["456", "1234", "1235"];

const solution = (phone_book) => {
  const dataSet = new Set();
  let max = Math.max(...phone_book.map((item, _) => item.length)); // 번호 중 가장 사이즈가 큰 번호의 사이즈구함
  let min = Math.min(...phone_book.map((item, _) => item.length)); // 번호 중 가장 사이즈가 큰 번호의 사이즈구함

  for (let i = min; i < max + 1; i++) {
    for (let j = 0; j < phone_book.length; j++) {
      dataSet.add(phone_book[j].substr(0, i));
    }
    console.log(dataSet);
    if (dataSet.size !== phone_book.length) {
      return false;
    } else {
      dataSet.clear();
    }
  }

  return true;
};

console.log(solution(pb4));
