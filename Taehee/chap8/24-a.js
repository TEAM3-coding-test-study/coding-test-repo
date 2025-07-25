function solution(id_list, report, k) {
  var answer = new Array(id_list.length).fill(0);
  var obj = {};
  var count = {};
  for (let i = 0; i < report.length; i++) {
    const cmd = report[i].split(" ");
    if (!obj[cmd[0]]) obj[cmd[0]] = [];
    if (!obj[cmd[0]].includes(cmd[1])) {
      obj[cmd[0]].push(cmd[1]);
      if (!count[cmd[1]]) {
        count[cmd[1]] = 1;
      } else {
        count[cmd[1]]++;
      }
    }
  }
  for (const reporter in obj) {
    const reportedList = obj[reporter];

    for (const target of reportedList) {
      if (count[target] >= k) {
        const idx = id_list.indexOf(reporter);
        answer[idx]++;
      }
    }
  }
  return answer;
}
