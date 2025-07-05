function solution(arr1, arr2) {
  var answer = [...new Array(arr1.length)].map((_, i) =>
    new Array(arr2[0].length).fill(0)
  );
  for (var n = 0; n < arr1.length; n++) {
    for (var i = 0; i < arr2[0].length; i++) {
      for (var a = 0; a < arr2.length; a++) {
        answer[n][i] += arr1[n][a] * arr2[a][i];
      }
    }
  }
  return answer;
}
