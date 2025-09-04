function solution(topping) {
  var answer = 0;
  for (let i = 1; i < topping.length; i++) {
    const arr1 = topping.slice(0, i);
    const arr2 = topping.slice(i);
    if (new Set(arr1).size === new Set(arr2).size) answer++;
  }
  return answer;
}

console.log(solution([1, 2, 1, 3, 1, 4, 1, 2]));

// 실패
