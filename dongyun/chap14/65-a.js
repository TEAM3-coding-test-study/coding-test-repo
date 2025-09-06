function solution(s) {
    var answer = [];
    let zeroCnt = 0;
    let convertCnt = 0;
    
    const convertToBinary = (len) =>{
        let str = [];
        while(len > 1){
                str.unshift(len % 2);
                len = Math.floor(len / 2);
        }
        str.unshift(1);
        return str.join("");
    }
    
    while(s !== "1"){
        while(s.includes("0")){
            s = s.replace("0", "");
            zeroCnt++;
        }
        s = convertToBinary(s.length);
        convertCnt++;
        // console.log(s)
    }

    return [convertCnt, zeroCnt];
}