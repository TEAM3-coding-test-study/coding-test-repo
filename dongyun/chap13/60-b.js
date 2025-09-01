function solution(s) {
    var answer = [];
    const counter = new Set();
    const arrStr = s.replaceAll("{", "[").replaceAll("}", "]")
    const temp = JSON.parse(arrStr).sort((a, b) => {
        return a.length > b.length ? 1 : -1
    })
    for(const t of temp){
        for(const e of t){
            if(!counter.has(e)){
                answer.push(e);
                counter.add(e);
            }
        }
    }
    return answer;
}