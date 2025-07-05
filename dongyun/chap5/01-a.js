const arr = [1,-5, 2, 4, 3];
const arr1 = [1, 1, 2, 2, 3, 4, 5];
const arr2 = [1, 6, 7];
const arr3 = [];
const arr4 = [-1];
const arr5 = [6, -1, 5, -2, 4, -3, 3, -1, 0]

const solution = (arr) =>{
    if(arr.length > 1)
        arr.sort((a, b)=> a- b)
    
    console.log(arr)
    return arr;
}

solution(arr5)