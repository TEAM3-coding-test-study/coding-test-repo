function solution(n, k, cmd) {
  let answer = "";
  let up = [...new Array(n + 1)].map((_, i) => i - 1);
  let down = [...new Array(n + 1)].map((_, i) => i + 1);
  let deleted = [];

  for (let i of cmd) {
    if (i === "C") {
      down[up[k]] = down[k];
      up[down[k]] = up[k];
      deleted.push(k);
      k = down[k] === n ? up[k] : down[k];
    } else if (i === "Z") {
      let re = deleted.pop();
      down[up[re]] = re;
      up[down[re]] = re;
    } else {
      let [c, off] = i.split(" ");
      if (c === "D") {
        for (let j = 0; j < off; j++) k = down[k];
      } else {
        for (let j = 0; j < off; j++) k = up[k];
      }
    }
  }

  let temp = [...new Array(n)].fill("O");
  for (let i of deleted) {
    temp[i] = "X";
  }
  answer = temp.join("");

  return answer;
}

console.log(solution(6, 2, ["C", "C", "C", "Z", "Z"]));
