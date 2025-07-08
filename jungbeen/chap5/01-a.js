var fs = require("fs");
// var input = fs.readFileSync("/dev/stdin").toString().split(" ");
var input = fs.readFileSync("input.txt", "utf-8").trim().split("\n");

var array = JSON.parse(input[0]);
var len = array.length;

for (let i = 0; i < len; i++) {
  for (let j = i + 1; j < len; j++) {
    if (array[i] > array[j]) {
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
}

console.log(array);

// O(N^2) 시간복잡도 초과
