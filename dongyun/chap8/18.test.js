import solution from "./18-a";

describe("두 개의 수로 특정 값 만들기 문제", () => {
  test("[1, 2, 3, 4, 8], 6", () => {
    expect(solution([1, 2, 3, 4, 8], 6)).toBe(true);
  });
  test("[2, 3, 5, 9], 10", () => {
    expect(solution([2, 3, 5, 9], 10)).toBe(false);
  });
  test("[9, 3, 5, 2], 10", () => {
    expect(solution([2, 3, 5, 9], 10)).toBe(false);
  });
  test("[2, 3, 5, 9, 15, 21, 34, 78, 1202, 4012, 4400, 5120, 8888, 9123, 9999], 9157", () => {
    expect(solution([2, 3, 5, 9, 15, 21, 34, 78, 1202, 4012, 4400, 5120, 8888, 9123, 9999], 9157)).toBe(true);
  });
});

