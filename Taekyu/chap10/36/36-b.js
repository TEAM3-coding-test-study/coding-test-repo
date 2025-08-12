const phone_book = ["119", "97674223", "1195524421"];
const pb2 = ["123", "456", "789"];
const pb3 = ["12", "123", "1235", "567", "88"];
const pb4 = ["456", "1234", "1235"];

const solution = (phone_book) => {
  const dataSet = new Set();
  const numberLenSet = new Set();

  for (const item of phone_book) {
    numberLenSet.add(item.length);
  }

  //   console.log(numberLenSet);

  for (const value of numberLenSet) {
    for (let j = 0; j < phone_book.length; j++) {
      dataSet.add(phone_book[j].substr(0, value));
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
