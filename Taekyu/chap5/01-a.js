const readline = require("readline");

// 인터페이스 생성
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const arr = new Array();

function getArrayItem() {
  rl.question("배열의 원소를 입력하시오(종료 : exit)", (input) => {
    if (input === "exit") {
      rl.close();
    } else {
      arr.push(input);
      getArrayItem();
    }
  });
}

rl.on("close", () => {
  solution(arr); // 정렬 수행
  console.log("정렬된 배열:", arr);
});

getArrayItem();

const solution = (arr) => {
  arr.sort((a, b) => a - b);
  return arr;
};
