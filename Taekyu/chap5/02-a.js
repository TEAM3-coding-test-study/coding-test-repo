const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const arr = new Array();

function getArrayItem() {
  rl.question("배열의 원소를 입력하시오(종료 : exit)", (input) => {
    if (input === "exit") {
      rl.on("close", () => {
        solution(arr); // 정렬 수행
        console.log("정렬된 배열:", arr);
      });
      rl.close();
    } else {
      arr.push(input);
      getArrayItem();
    }
  });
}

getArrayItem();

const solution = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
        j--;
        // splice하는 경우, 제거된 요소 이후의 요소들이 한 칸씩 앞으로 당겨지므로
        // 그에 맞게 인덱스도 조정해야됨
      }
    }
  }
  arr.sort((a, b) => b - a);
  return arr;
};
