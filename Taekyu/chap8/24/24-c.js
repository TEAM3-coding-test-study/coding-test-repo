const id_list1 = ["muzi", "frodo", "apeach", "neo"];
const report1 = ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"];
const k1 = 2;

const id_list2 = ["con", "ryan"];
const report2 = ["ryan con", "ryan con", "ryan con", "ryan con"];
const k2 = 3;

const reportProcessor = (item, reportedObj, id_list, reportObj) => {
  const [reporter, reportee] = item.split(" ");

  reportedObj[reportee][reporter] = true;
  reportObj[reporter][reportee] = true;
};

const solution = (id_list, report, k) => {
  const reportedObj = {};
  const reportObj = {};
  const returnArray = [];

  for (const id of id_list) {
    reportedObj[id] = {};
    reportObj[id] = {};
  }

  for (const item of report) {
    reportProcessor(item, reportedObj, id_list, reportObj);
  }
  //   console.log(reportObj);
  //   console.log(reportedObj);

  for (const i of id_list) {
    let count = 0;
    for (const j of id_list) {
      if (reportObj[i][j] && Object.keys(reportedObj[j]).length >= k) {
        count++;
      }
    }
    returnArray.push(count);
  }

  return returnArray;
};

console.log(solution(id_list1, report1, k1));
