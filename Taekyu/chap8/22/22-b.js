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
      chatScreen.push(`${arr[1]}/님이 들어왔습니다.`);
      break;
    case "Leave":
      chatScreen.push(`${arr[1]}/님이 나갔습니다.`);
      break;
    case "Change":
      userInfo[arr[1]] = arr[2];
      break;
  }
};

const changeToNickname = (chat, userInfo) => {
  const arr = chat.split("/");
  const nickname = userInfo[arr[0]];
  return nickname + arr[1];
};

const solution = (record) => {
  const chatScreen = [];
  const userInfo = {};
  for (let i = 0; i < record.length; i++) {
    const arr = record[i].split(" ");
    processCmd(arr, userInfo, chatScreen);
  }

  for (let i = 0; i < chatScreen.length; i++) {
    const updatedChat = changeToNickname(chatScreen[i], userInfo);
    chatScreen[i] = updatedChat;
  }

  return chatScreen;
};

console.log(solution(record));
