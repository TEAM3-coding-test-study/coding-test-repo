function solution(arr1, arr2){
    let pointer1 = 0;
    let pointer2 = 0;
    const limit1 = arr1.length;
    const limit2 = arr2.length;
    const result = [];
    while(pointer1 !== limit1 || pointer2 !== limit2){
        const a = arr1[pointer1];
        const b = arr2[pointer2];
        console.log("a: ", a, "pointer1 : ", pointer1, "b : ", b, "pointer2 : ", pointer2);
        if(a <= b){
            result.push(a);
            pointer1++;
        }
        else{
            result.push(b);
            pointer2++;
        }
    }
    return result;
}

console.log(solution([1, 3, 5], [2, 4, 6])) // [1, 2, 3, 4, 5, 6]
console.log(solution([1, 2, 3], [4, 5, 6])) // [1, 2, 3, 4, 5, 6]