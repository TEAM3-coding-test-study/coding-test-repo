
export default function solution(N, K){
    let answer = 0;

    const yose = new Array(N).fill(1);
    let startIndex = 0;
    while(yose.filter((y)=> y === 1).length > 1){
        const size = yose.filter((y)=> y === 1).length;
        console.log(size)
        console.log(yose)
        if(yose[(startIndex + K) % size] !== 1){
            console.log(startIndex, K, size, (startIndex + K) % size)
            startIndex += 1;
        }
        else{
            yose[(startIndex + K) % size] = 0;
            startIndex = (startIndex + K) % size + 1
        }
    }

    return answer;
}

// console.log(solution(5, 2))

//  console.log
//     215 2 2 1

//       at log (dongyun/chap7/15-a.js:12:21)

//   console.log
//     2

//       at log (dongyun/chap7/15-a.js:9:17)

//   console.log
//     [ 0, 0, 0, 1, 1 ]

//       at log (dongyun/chap7/15-a.js:10:17)

//   console.log
//     216 2 2 0
