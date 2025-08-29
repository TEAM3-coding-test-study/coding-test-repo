function solution(s) {
  const st = new Set();
  const answer = [];
  const arr = s
    .slice(1, -1)
    .split("}")
    .slice(0, -1)
    .sort((a, b) => a.length - b.length);

  console.log("1----------------");
  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split("{").join("").split(",");
    console.log("2-------------");
    console.log(arr[i]);
    if (arr[i][0] === "") arr[i] = arr[i].slice(1);
  }

  for (let i of arr) {
    for (let j of i) {
      if (st.has(j)) continue;
      else {
        st.add(j);
        answer.push(j);
      }
    }
  }
  return Array.from(answer, Number);
}

console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}"));
// console.log(solution("{{123}}"));
// console.log(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}"));
