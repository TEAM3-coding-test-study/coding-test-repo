const tp1 = [1, 2, 1, 3, 1, 4, 1, 2];
const tp2 = [1, 2, 3, 1, 4];

const solution = (topping) => {
  let count = 0;
  for (let i = 1; i < topping.length; i++) {
    const a = topping.slice(0, i);
    const b = topping.slice(i);
    const aCnt = new Set(a).size;
    const bCnt = new Set(b).size;
    if (aCnt === bCnt) count++;
  }

  return count;
};

console.log(solution(tp2));
