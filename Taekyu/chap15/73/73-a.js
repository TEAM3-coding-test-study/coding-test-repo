const solution = (n) => {
  const fibodata = Array(n + 1).fill(0);

  const fibo = (n) => {
    // console.log(n);
    if (fibodata[n] !== 0) return fibodata[n];
    if (n === 0) {
      return fibodata[n];
    }
    if (n === 1) {
      fibodata[n] = 1;
      return fibodata[n];
    } else {
      fibodata[n] = fibo(n - 1) + fibo(n - 2);
      return fibodata[n];
    }
  };

  fibo(n);
  //   console.log(fibodata);
  return fibodata[n] % 1234567;
};

console.log(solution(5));
