const want = ["banana", "apple", "rice", "pork", "pot"];
const number = [3, 2, 2, 2, 1];
const discount = [
  "chicken",
  "apple",
  "apple",
  "banana",
  "rice",
  "apple",
  "pork",
  "banana",
  "pork",
  "rice",
  "pot",
  "banana",
  "apple",
  "banana",
];

const want2 = ["apple"];
const number2 = [10];
const discount2 = [
  "banana",
  "banana",
  "banana",
  "banana",
  "banana",
  "banana",
  "banana",
  "banana",
  "banana",
  "banana",
];

const solution = (want, number, discount) => {
  const obj = {};
  const total_obj = {};
  let regiDayNum = 0;

  for (let i = 0; i < 10; i++) {
    if (obj[discount[i]]) {
      obj[discount[i]] += 1;
    } else {
      obj[discount[i]] = 1;
    }
  }

  total_obj[1] = { ...obj };

  for (let i = 1; i < discount.length; i++) {
    // 10일 사이즈로 배열을 옮겨다니면서 n일차에 할인 품목이 무엇인지 추적
    obj[discount[i - 1]] -= 1; // n-1일차의 품목 수량 감소
    // 남은 기간이 10일 보다 작을 경우, 계속해서 수량이 줄어들기만 해야됨
    if (i <= discount.length - 10) {
      if (obj[discount[i + 9]]) {
        obj[discount[i + 9]] += 1;
      } else {
        obj[discount[i + 9]] = 1;
      }
    }
    total_obj[i + 1] = { ...obj };
  }

  Outer: for (let i = 1; i <= discount.length; i++) {
    for (let j = 0; j < want.length; j++) {
      // 문제의 2번 예시처럼 아예 어떤 일차에 원하는 품목이 없는 경우도 있기 때문에 undefined로 고려
      if (total_obj[i][want[j]] < number[j] || total_obj[i][want[j]] === undefined) {
        continue Outer;
      }
    }
    regiDayNum += 1;
  }

  return regiDayNum;
};

// console.log(solution(want, number, discount));
console.log(solution(want2, number2, discount2));
