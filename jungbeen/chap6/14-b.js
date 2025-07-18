// 오답 코드

function solution(n, k, cmd) {
  var answer = "";
  let li = [...new Array(n)].map((_, i) => i);
  let cur = k;
  let deleted = [];
  let last = n - 1;

  for (let c of cmd) {
    let move = c[0];
    if (move === "D" || move === "U") {
      let offset = +c.split(" ")[1];
      let dir = move === "D" ? 1 : -1;
      while (offset > 0) {
        cur += dir;
        if (li[cur] === -1) continue;
        else {
          offset--;
        }
      }
    } else if (move === "C") {
      li[cur] = -1;
      deleted.push(cur);
      if (cur === last) {
        while (li[cur] === -1) {
          cur--;
        }
        last = cur;
      } else {
        while (li[cur] === -1) {
          cur++;
        }
      }
    } else {
      let re = deleted.pop();
      if (re > last) last = re;
      li[re] = 0;
    }
    console.log(li);
    console.log(deleted);
  }

  let temp = [...new Array(n)].fill("O");
  for (let i of deleted) {
    temp[i] = "X";
  }
  answer = temp.join("");
  // for (let i of li) {
  //   if (i !== -1) answer += "O";
  //   else answer += "X";
  // }

  return answer;
}

// console.log(solution(5, 0, ["C", "Z", "Z"]));
// console.log(solution(5, 2, ["C", "C", "U 2", "C", "Z"]));

console.log(solution(6, 1, ["C", "C", "C", "C", "C", "Z", "Z", "C", "C"]));
