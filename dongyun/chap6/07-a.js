function solution(n, k, cmd) {
  var answer = "";

  const stack = [];
  let top = -1;

  const arr = Array(n).fill(1);
  let maxIndex = n - 1;
  for (let i = 0; i < cmd.length; i++) {
    //명령 하나 씩 순회.
    // O(M) 20만
    if (cmd[i][0] === "U") {
      //선택행의 위로 이동을 -처리
      let move = Number(cmd[i][2]);

      for (let u = 0; u < move; u++) {
        if (arr[k - 1] === -1) move += 1;
        k -= 1;
      }
    }
    if (cmd[i][0] === "D") {
      let move = Number(cmd[i][2]);

      for (let u = 0; u < move; u++) {
        if (arr[k + 1] === -1) move += 1;
        k += 1;
      }
    }
    if (cmd[i][0] === "C") {
      //현재 k가 가리키는 행을 삭제 처리
      //삭제 내용이 담긴 stack에 담음
      stack.push(k);
      top++;
      // 삭제되었음을 명시, 이동 간에 지나치도록.
      arr[k] = -1;
      if (k === maxIndex) {
        maxIndex -= 1;
        k = maxIndex;
      } else {
        k += 1;
      }
      //1.삭제된 행의 아래로 이동
      //2 만약 삭제된 행이 마지막 행이라면,
      //바로 위로 이동.
    }

    if (cmd[i][0] === "Z") {
      const rsIndex = stack.pop();
      arr[rsIndex] = 1;
      top--;

      if (rsIndex > maxIndex) {
        maxIndex++;
      }
    }
  }
  for (const [index, ar] of arr.entries()) {
    if (ar === 1) answer += "O";
    else answer += "X";
  }
  console.log(answer);
  return answer;
}
solution(8, 2, ["D 2", "C", "U 3", "C", "D 4", "C", "U 2", "Z", "Z"]);
console.log("OOOOXOOO");

solution(8, 2, [
  "D 2",
  "C",
  "U 3",
  "C",
  "D 4",
  "C",
  "U 2",
  "Z",
  "Z",
  "U 1",
  "C",
]);
console.log("OOXOXOOO");
