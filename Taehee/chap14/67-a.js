function solution(brown, yellow) {
  for (let h = 1; h <= Math.sqrt(yellow); h++) {
    if (yellow % h === 0) {
      let w = yellow / h;
      let totalW = w + 2;
      let totalH = h + 2;

      if (totalW * totalH === brown + yellow) {
        return [totalW, totalH];
      }
    }
  }
}
