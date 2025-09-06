function solution(topping) {
  const back = new Map();
  const front = new Set();
  let answer = 0;

  for (let t of topping) back.set(t, (back.get(t) ?? 0) + 1);

  for (let t of topping) {
    front.add(t);
    back.set(t, back.get(t) - 1);
    if (back.get(t) === 0) back.delete(t);
    if (back.size === front.size) answer++;
  }

  return answer;
}

console.log(solution([1, 2, 1, 3, 1, 4, 1, 2]));
