// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().split(" ");

// const total = +input[0];
// const term = +input[1];

const total = 5;
const term = 2;

const next = [...new Array(total)].map((_, i) => i + 1);
next[next.length - 1] = 0;
let cur = next.length - 1;
let answer = 0;

for (let i = 0; i < next.length - 1; i++) {
  let prev = 0;
  for (let j = 0; j < term; j++) {
    if (j === term - 1) {
      prev = cur;
    }
    cur = next[cur];
  }
  //   console.log(cur + 1);
  next[prev] = next[cur];
  if (i === next.length - 2) {
    answer = prev + 1;
  }
}

console.log(answer);
