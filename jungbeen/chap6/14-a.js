// 오답코드

function solution(n, k, cmd) {
  var answer = "";
  let deleted = [];
  let cur = k;
  let li = [...new Array(n)].map((_, i) => i);

  for (let c of cmd) {
    let move = c[0];
    if (move === "D" || move === "U") {
      cur = move === "D" ? cur + +c[2] : cur - +c[2];
    } else if (move === "C") {
      deleted.push(li[cur]);
      li.splice(cur, 1);
      if (cur === li.length) {
        cur--;
      }
    } else {
      let restore = deleted.pop();
      console.log("sssss" + li);
      console.log(restore);
      if (restore <= cur) {
        cur++;
      }
      li.splice(restore, 0, restore);
      console.log(li);
    }
    console.log(deleted);
  }
  for (let i = 0; i < n; i++) {
    if (deleted.includes(i)) answer += "X";
    else answer += "O";
  }
  return answer;
}

console.log(solution(6, 2, ["C", "C", "C", "Z", "Z"]));
