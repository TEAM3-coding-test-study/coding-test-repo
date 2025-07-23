export default function solution(stringList, queryList) {
    const answer = [];
    const p = 31;
    const m = 1000000007;
    const hashFunc = (s) =>{
        const arrS = s.split("");
        let sum = 0;
        for(const [index, char] of arrS.entries()){
            const num = char.codePointAt(0) - 'a'.codePointAt(0) + 1; //최소 1
            // console.log(num)
            const hashed = num * Math.pow(p, index)
            // console.log(hashed);
            sum += hashed;
        }
        return sum % m;
    }

    const hashedStringList = stringList.map((str)=>hashFunc(str))
    const hashedQueryList = queryList.map((str)=>hashFunc(str))

    for(const q of hashedQueryList){
        if(hashedStringList.filter((h)=> h===q).length !== 0){
            answer.push(true);
            continue;
        }
        answer.push(false)
    }

    console.log(answer)

    return answer;
}

solution(["apple", "banana", "cherry"], ["banana", "kiwi", "melon", "apple"]);