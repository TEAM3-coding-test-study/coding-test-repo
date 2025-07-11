function solution(n, k, cmd) {
  const deleted = [];
  const up = [...new Array(n + 1)].map((_, i) => i - 1);
  const down = [...new Array(n + 1)].map((_, i) => i + 1);

  k += 1;

  for (const item of cmd) {
    if (item[0] === "C") {
      deleted.push(k);
      up[down[k]] = up[k];
      down[up[k]] = down[k];
      k = down[k] === n + 1 ? up[k] : down[k];
    } else if (item[0] === "Z") {
      const restore = deleted.pop();
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
  for (const i of deleted) {
    answer[i - 1] = "X";
  }

  return answer.join("");
}

// function solution(n, k, cmd) {
//   var count = 0;
//   var location = k;
//   var deleted = [];
//   var arr = [...new Array(k)].map((_, i) => i + 1);

//   for (var i = 0; i < cmd.length; i++) {
//     var command = cmd[i].split(" ");

//     if (command[0] === "D") {
//       var steps = parseInt(command[1]);
//       location += steps;
//       while (steps--) {
//         location++;
//         while (!arr[location]) location++;
//       }
//     } else if (command[0] === "U") {
//       var steps = parseInt(command[1]);
//       while (steps--) {
//         location--;
//         while (!arr[location]) location--;
//       }
//     } else if (command[0] === "C") {
//       deleted.push(location);
//       arr.splice(location, 1);
//       arr[location] = false;
//       if (location === arr.length) {
//         location--;
//       }
//     } else if (command[0] === "Z") {
//       var recovered = deleted.pop();
//       arr[recovered] = true;
//     }
//   }

//   return arr.map((cell) => (cell ? "O" : "X")).join("");
// }
