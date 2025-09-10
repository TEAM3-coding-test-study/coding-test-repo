const factorial = (n) => {
  let answer = 1;
  for (let i = n; i >= 1; i--) {
    answer *= i;
  }
  return answer;
};

const solution = (n) => {
  let a = 0; // 1의 갯수
  let b = 0; // 2의 갯수
  const arr = [];
  let total = 0;

  // 여기서 n이 될 수 있는 가능한 1과 2의 갯수 조합을 모두 구함
  while (a >= 0) {
    a = n - 2 * b;
    if (a < 0) break;
    arr.push([a, b]);
    b++;
  }

  // 여기서는 해당 갯수에서 가능한 나열의 경우의 수를 구해줌
  arr.forEach((v) => {
    const temp = factorial(v[0] + v[1]) / (factorial(v[0]) * factorial(v[1]));
    // console.log(v, temp);
    total += temp % 1000000007;
  });

  //   console.log(arr);
  //   console.log(total);
  return total % 1000000007;
};

console.log(solution(4));
