const id_list1 = ["muzi", "frodo", "apeach", "neo"];
const report1 = ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"];
const k1 = 2;

const reportProcessor = (item, dataObj, id_list) => {
  const [reporter, reportee] = item.split(" ");

  if (!dataObj[reporter][reportee]) {
    dataObj[reporter][reportee] = 1;
  } else {
    dataObj[reporter][reportee]++;
  }

  for (let i = 0; i < id_list.length; i++) {
    if (id_list[i] === reporter) continue;

    if (dataObj[id_list[i]][reportee]) {
      dataObj[id_list[i]][reportee]++;
    }
  }
};

const solution = (id_list, report, k) => {
  const dataObj = {};

  for (const id of id_list) {
    dataObj[id] = {};
  }

  for (const item of report) {
    reportProcessor(item, dataObj, id_list);
    console.log(dataObj);
  }
};

solution(id_list1, report1, k1);
