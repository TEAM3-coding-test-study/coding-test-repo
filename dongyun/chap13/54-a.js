function solution(s){
    const alphabet = new Array(26).fill(0);
    const result = []
    for(const char of s){
        const index = char.charCodeAt() - 97; // 'a'를 0으로 매핑
        alphabet[index] += 1;
    }

    for(const [index, alp] of alphabet.entries()){
        if(alp !== 0){
            for(let i = 0; i < alp; i++)
                result.push(String.fromCharCode(index + 97));
        }
    }
    return result.join(",");
}

console.log(solution("hello")) 
console.log(solution("algorithm")) 