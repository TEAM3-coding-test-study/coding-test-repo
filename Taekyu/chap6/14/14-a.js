/*
 * 정확성, 효율성 테스트 실패
 */

const n = 5;
const k = 1;
const cmd = ["D 2", "C", "U 3", "C", "D 4", "C", "U 2", "Z", "Z"];
const cmd2 = ["D 2", "C", "U 3", "C", "D 4", "C", "U 2", "Z", "Z", "U 1", "C"];
const cmd3 = ["C", "D 1", "C", "Z", "C"];

const cmdProcessor = (cmd, curIdx, graph, deletedStack) => {
  let newIdx;
  const moveNum = Number(cmd.split(" ")[1]);

  switch (cmd[0]) {
    case "U":
      console.log("U graph: ", graph);
      console.log("curIdx: ", curIdx);

      graph[curIdx].chosen = false;
      graph[curIdx - moveNum].chosen = true;
      return curIdx - moveNum;
    case "D":
      console.log("D graph: ", graph);
      console.log("curIdx: ", curIdx);

      graph[curIdx].chosen = false;
      graph[curIdx + moveNum].chosen = true;
      return curIdx + moveNum;
    case "C":
      console.log("C graph: ", graph);
      console.log("curIdx: ", curIdx);
      if (curIdx === graph.length - 1) {
        graph[curIdx - 1].chosen = true;
        newIdx = curIdx - 1;
      } else {
        graph[curIdx + 1].chosen = true;
        newIdx = curIdx;
      }
      graph[curIdx].deleted = true;
      graph[curIdx].chosen = false;
      deletedStack.push(graph[curIdx]);
      graph.splice(curIdx, 1);
      return newIdx;
    case "Z":
      console.log("Z graph: ", graph);
      console.log("curIdx: ", curIdx);
      const resurrectRow = deletedStack.pop();
      resurrectRow.deleted = false;
      graph.splice(resurrectRow.id, 0, resurrectRow);
      if (resurrectRow.id < graph[curIdx].id) {
        newIdx = curIdx + 1;
      } else newIdx = curIdx;
      return newIdx;
  }
};

const solution = (n, k, cmd) => {
  const array = Array.from({ length: n }, (_, i) => i);
  const deletedStack = new Array();
  let chosenIdx = k;
  let answerArray = Array(n).fill("O");

  const graph = array.map((item, index) => {
    return { id: index, chosen: false, deleted: false };
  });
  graph[k].chosen = true;

  for (let i = 0; i < cmd.length; i++) {
    chosenIdx = cmdProcessor(cmd[i], chosenIdx, graph, deletedStack);
  }

  for (deletedItem of deletedStack) {
    answerArray[deletedItem.id] = "X";
  }
  return answerArray.join("");
};

console.log(solution(n, k, cmd3));
