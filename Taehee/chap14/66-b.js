function solution(topping) {
  let answer = 0;

  const right = new Map();
  for (let t of topping) {
    right.set(t, (right.get(t) || 0) + 1);
  }

  const left = new Set();

  for (let i = 0; i < topping.length; i++) {
    const t = topping[i];
    left.add(t);

    right.set(t, right.get(t) - 1);
    if (right.get(t) === 0) right.delete(t);

    if (left.size === right.size) {
      answer++;
    }
  }

  return answer;
}
