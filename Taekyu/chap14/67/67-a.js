const solution = (yellow, white) => {
  for (let x = 3; x < yellow / 2; x++) {
    const y = (yellow - x * 2) / 2 + 2;
    console.log(x, y);
    if ((x - 2) * (y - 2) !== white || y > x) continue;
    return [x, y];
  }
};

console.log(solution(8, 1));
