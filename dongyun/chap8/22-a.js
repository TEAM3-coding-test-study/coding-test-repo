function solution(record) {
    var answer = [];
    const chatroom = {};
    for(const r of record){
        const [cmd, uid, name] = r.split(" ");
        if(cmd === "Enter" || cmd === "Change")
            chatroom[uid] = name;
    }
    for(const r of record){
        const [cmd, uid, name] = r.split(" ");
        if(cmd === "Enter"){
            answer.push(`${chatroom[uid]}님이 들어왔습니다.`)
        }
        if(cmd === "Leave"){
            answer.push(`${chatroom[uid]}님이 나갔습니다.`)
        }
    }
    return answer;
}