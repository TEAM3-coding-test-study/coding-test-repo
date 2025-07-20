function solution(cards1, cards2, goal) {
  var answer = "";
  let i = 0,
    j = 0,
    k = 0;

  while (true) {
    if (k === goal.length) return "Yes";

    if (cards1[i] === goal[k]) {
      i++;
      k++;
    } else if (cards2[j] === goal[k]) {
      j++;
      k++;
    } else return "No";
  }
}

// console.log(
//   solution(
//     ["i", "drink", "water"],
//     ["want", "to"],
//     ["i", "want", "to", "drink", "water"]
//   )
// );
console.log(
  solution(
    ["i", "water", "drink"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
);
