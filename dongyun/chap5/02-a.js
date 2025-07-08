
const arr = [4, 2, 2, 1, 3, 4]

const solution = (arr) =>{
    const ans = [...new Set(arr)]
    ans.sort((a, b) => b - a)
    console.log(ans)
    return ans
}

solution(arr)