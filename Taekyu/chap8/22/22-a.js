const record = [
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
];

const processCmd = (arr, userInfo, chatScreen) => {
  switch (arr[0]) {
    case "Enter":
      userInfo[arr[1]] = arr[2];
      chatScreen.push(`${userInfo[arr[1]]}님이 들어왔습니다`);
      break;
    case "Leave":
      chatScreen.push(`${userInfo[arr[1]]}님이 나갔습니다`);
      break;
    case "Change":
      userInfo[arr[1]] = arr[2];
      break;
  }
};

const solution = (record) => {
  const chatScreen = [];
  const userInfo = {};
  for (let i = 0; i < record.length; i++) {
    const arr = record[i].split(" ");
    // const cmd = arr[0];
    // const id = arr[1];
    // const nick = arr[2];

    processCmd(arr, userInfo, chatScreen);
  }

  return chatScreen;
};

console.log(solution(record));
