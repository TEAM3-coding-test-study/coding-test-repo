import solution from "./02-a";

describe("10진수를 2진수로 변환하기", () => {
  test("10", () => {
    expect(solution(10)).toBe("1010");
  });
  test("27", () => {
    expect(solution(27)).toBe("11011");
  });
  test("12345", () => {
    expect(solution(12345)).toBe("11000000111001");
  });
});
