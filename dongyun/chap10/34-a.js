function solution(nums) {
    var answer = 0;
    const spc = [...new Array(nums.length)].fill(-1);
    console.log(arr);
    
    const find = (arr, x) => {
        if(x > arr.length)
            return;
        if(x === arr[x])
            return x;
        else
            find(arr, arr[x]);
    }
    
    for(const [index,num] of nums.entries()){
        spc[index] = num;
    }
    
    for(const [index, item] of spc){
        if(spc[index] === item)
    }
    
    return answer;
}