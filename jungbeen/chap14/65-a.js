function deleteZero(s) {
  let cntZ = 0;
  const len = s.length;
  for (let i of s) if (i === "0") cntZ++;

  s = "";
  for (let i = 0; i < len - cntZ; i++) s += "1";

  return [cntZ, s];
}

function convertToBi(s) {
  let len = s.length;
  s = "";
  while (len > 1) {
    s = String(len % 2) + s;
    len = Math.floor(len / 2);
  }
  s = "1" + s;
  return s;
}

function solution(s) {
  let cnt = 0;
  let deleteZ = 0;
  while (s !== "1") {
    cnt++;
    const [cntZ, newS] = deleteZero(s);
    deleteZ += cntZ;
    s = newS;
    s = convertToBi(s);
  }

  return [cnt, deleteZ];
}

console.log(solution("110010101001"));
