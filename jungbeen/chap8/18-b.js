function hash(arr, k) {
  let h = new Array(k + 1).fill(0);
  for (let i of arr) {
    if (i >= k) break;
    h[i]++;
  }
  return h;
}

function solution(arr, k) {
  const h = hash(arr, k);

  for (let i of arr) {
    let c = k - i;
    if (c !== i && h[c] === 1) return true;
  }

  return false;
}

console.log(solution([1, 2, 3, 4, 8], 6));
console.log(solution([2, 3, 5, 9], 10));
