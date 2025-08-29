function solution(n) {
    const stringN = n.toString().split("");
    stringN.sort((a, b) => b - a);
    
    return Number(Array.toString(stringN));
}