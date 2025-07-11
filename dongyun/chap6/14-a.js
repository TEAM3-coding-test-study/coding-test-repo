function solution(n, k, cmd) {
  const moveUp = (move) => {
    let moveLeft = move;
    while (moveLeft > 0) {
      k -= 1;
      if (arr[k] !== -1) moveLeft -= 1;
    }
    return k;
  };

  const moveDown = (move) => {
    let moveLeft = move;
    while (moveLeft > 0) {
      k += 1;
      if (arr[k] !== -1) moveLeft -= 1;
    }
    return k;
  };

  const afterDelete = () => {
    for (let u = k; u < n; u++) {
      if (arr[u] !== -1) return u;
    }

    return moveUp(1);
  };

  var answer = "";

  const stack = [];

  let top = -1;

  const arr = Array(n).fill(1);

  for (let i = 0; i < cmd.length; i++) {
    //명령 하나 씩 순회.

    // O(M) 20만

    if (cmd[i][0] === "C") {
      //현재 k가 가리키는 행을 삭제 처리

      //삭제 내용이 담긴 stack에 담음

      stack.push(k);

      top++; // 삭제되었음을 명시, 이동 간에 지나치도록.

      arr[k] = -1; //1.삭제된 행의 아래로 이동 //2 만약 삭제된 행이 마지막 행이라면, //바로 위로 이동.

      k = afterDelete();
    } else if (cmd[i][0] === "Z") {
      const rsIndex = stack.pop();

      arr[rsIndex] = 1;

      top--;
    } else {
      const [action, num] = cmd[i].split(" ");
      if (action === "U") {
        moveUp(num);
      } else {
        moveDown(num);
      }
    }
  }

  for (const [index, ar] of arr.entries()) {
    if (ar === 1) answer += "O";
    else answer += "X";
  }

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
