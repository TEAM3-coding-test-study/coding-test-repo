function solution(k, operations){
    let result = 0

    /** 합치기 연산 */
    const union = (arr, x, y) => {
        const xp = find(arr, x);
        const yp = find(arr, y);

        arr[xp] = arr[yp];
    }

    /** 찾기 연산 */
    const find = (arr, x) => {
        if(x > arr.length)
            return;

        if(x === arr[x])
            return x;
        else{
            find(arr, arr[x])
        }
    }

    const arr = [...new Array(k)].map((_, i)=>i);
    console.log("before arr : ", arr)

    for(const oper of operations){
        console.log(oper)
        const [op, x, y] = oper;
        if(op === 'u')
            union(arr, x, y);
        else if(op === 'f')
            find(arr, x);
    }

    console.log("after arr : ", arr)
    for(const [index, e] of arr.entries()){
        console.log(e)
        if(index === e){
            result += 1;
        }
    }
    console.log("--------")

    console.log("result : ", result);
    return result;
}

solution(3, [['u', 0, 1], ['u', 1, 2], ['f', 2], ]) // 1
solution(4, [['u', 0, 1], ['u', 2, 3], ['f', 0], ]) // 2