import solution from "./15-b";

describe("요세푸스 문제", () => {
  test("5, 2", () => {
    expect(solution(5, 2)).toBe(3);
  });
  test("7, 3", () => {
    expect(solution(7, 3)).toBe(4);
  });
});

