function solution(s) {
  let answer = [];
  let array = s.slice(2, -2).split("},{");
  array = array.map((e) => {
    return e.split(",");
  });
  array.sort((a, b) => {
    return a.length - b.length;
  });
  for (var i = 0; i < array.length; i++) {
    for (var n = 0; n < array[i].length; n++) {
      if (answer.includes(Number(array[i][n]))) {
        continue;
      }
      answer.push(Number(array[i][n]));
    }
  }
  return answer;
}
