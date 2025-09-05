function solution(s) {
  let transform = 0;
  let remove = 0;

  while (s !== "1") {
    transform++;

    let ones = 0;
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "1") ones++;
      else remove++;
    }

    s = ones.toString(2);
  }

  return [transform, remove];
}
