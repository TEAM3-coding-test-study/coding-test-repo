function solution(record) {
  var answer = [];
  var obj = {};

  for (var i = 0; i < record.length; i++) {
    let cmd = record[i].split(" ");
    if (cmd[0] === "Enter" || cmd[0] === "Change") {
      obj[cmd[1]] = cmd[2];
    }
  }

  for (var n = 0; n < record.length; n++) {
    let cmd = record[n].split(" ");
    if (cmd[0] === "Enter") {
      answer.push(obj[cmd[1]] + "님이 들어왔습니다.");
    } else if (cmd[0] === "Leave") {
      answer.push(obj[cmd[1]] + "님이 나갔습니다.");
    }
  }
  return answer;
}
