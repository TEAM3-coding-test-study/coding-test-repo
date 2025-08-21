function solution(record) {
  var answer = [];
  let cmds = [];
  let uids = [];
  let uidh = new Map();

  for (let i of record) {
    let [cmd, uid, name] = i.split(" ");
    if (cmd === "Change") {
      uidh.set(uid, name);
      continue;
    } else if (cmd === "Enter") {
      uidh.set(uid, name);
    }
    cmds.push(cmd);
    uids.push(uid);
  }

  for (let i = 0; i < cmds.length; i++) {
    let inputStr = "";
    if (cmds[i] === "Enter") {
      inputStr += `${uidh.get(uids[i])}님이 들어왔습니다.`;
    } else {
      inputStr += `${uidh.get(uids[i])}님이 나갔습니다.`;
    }
    answer.push(inputStr);
  }

  return answer;
}

console.log(
  solution([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ])
);
