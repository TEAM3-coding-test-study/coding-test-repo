function solution(n, k, cmd) {
  const stack = [];
  let top = -1;

  const up = [...new Array(n + 2)].map((_, i) => i - 1);
  // 연결 리스트에서, 각 행 위의 행의 index를 저장하는 배열
  const down = [...new Array(n + 1)].map((_, i) => i + 1);
  // 연결 리스트에서, 각 행 아래의 행의 index를 저장하는 배열

  k += 1; // 실제 표보다 위 아래 1씩 공간을 확보한 것에 맞추기 위해 1 더함.

  for (const item of cmd) {
    if (item[0] === "C") {
      //삭제 명령어
      // 삭제된 행 k를 기준으로, 위 행은 k 밑의 행 정보를,
      // 삭제된 행 k를 기준으로, 아래 행은 k 위의 정보를 저장함.

      stack.push(k);
      up[down[k]] = up[k];
      down[up[k]] = down[k];

      //만약 k가 마지막 행이었다면, k 위 행의 정보를 가지고 있어야 한다.
      k = n < down[k] ? up[k] : down[k];
    } else if (item[0] === "Z") {
      const restore = stack.pop();
      down[up[restore]] = restore;
      up[down[restore]] = restore;
    } else {
      const [action, num] = item.split(" ");
      if (action === "U") {
        for (let i = 0; i < num; i++) {
          k = up[k];
        }
      } else {
        for (let i = 0; i < num; i++) {
          k = down[k];
        }
      }
    }
  }
  const answer = new Array(n).fill("O");

  for (const i of stack) {
    answer[i - 1] = "X";
  }

  return answer.join("");
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
