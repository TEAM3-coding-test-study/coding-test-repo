function solution(N) {
  const result = [];

  function dfs(start, path, sum) {
    if (sum === 10) {
      result.push([...path]);
      return;
    }

    if (sum > 10) return;

    for (let i = start; i <= N; i++) {
      path.push(i);
      dfs(i + 1, path, sum + i);
      path.pop();
    }
  }

  dfs(1, [], 0);
  return result;
}

console.log(solution(5));
console.log(solution(2));
console.log(solution(7));
