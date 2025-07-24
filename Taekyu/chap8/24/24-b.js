const id_list1 = ["muzi", "frodo", "apeach", "neo"];
const report1 = ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"];
const k1 = 2;

const id_list2 = ["con", "ryan"];
const report2 = ["ryan con", "ryan con", "ryan con", "ryan con"];
const k2 = 3;

const reportProcessor = (item, dataObj, id_list, reportCountObj) => {
  const [reporter, reportee] = item.split(" ");

  reportCountObj[reportee]++;

  if (!dataObj[reporter][reportee]) {
    dataObj[reporter][reportee] = true;
  }
};

const solution = (id_list, report, k) => {
  const dataObj = {};
  const reportCountObj = {};
  const banned = [];
  const returnArray = [];

  for (const id of id_list) {
    dataObj[id] = {};
    reportCountObj[id] = 0;
  }

  for (const item of report) {
    reportProcessor(item, dataObj, id_list, reportCountObj);
    console.log(dataObj);
  }
  console.log(dataObj);
  console.log(reportCountObj);

  for (const id of id_list) {
    if (reportCountObj[id] >= k) {
      banned.push(id);
    }
  }

  for (const id of id_list) {
    let count = 0;
    for (const item of banned) {
      if (dataObj[id][item]) count++;
    }
    returnArray.push(count);
  }

  console.log(returnArray);
};

solution(id_list2, report2, k2);
