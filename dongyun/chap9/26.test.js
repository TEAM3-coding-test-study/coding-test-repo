// import solution from "./26-a";
import solution from "./26-b";
describe("트리 순회", () => {
  test("[1, 2, 3, 4, 5, 6, 7]", () => {
    expect(solution([1, 2, 3, 4, 5, 6, 7])).toStrictEqual(["1 2 4 5 3 6 7", "4 2 5 1 6 3 7", "4 5 2 6 7 3 1"]);
  });
});

