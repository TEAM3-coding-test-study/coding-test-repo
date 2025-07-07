import solution from "./01-a";

describe("괄호 짝 맞추기", () => {
  test("(())()", () => {
    expect(solution("(())()")).toBe(true);
  });
  test("((())()", () => {
    expect(solution("((())()")).toBe(false);
  });
  test("", () => {
    expect(solution("")).toBe(true);
  });
  test(")(", () => {
    expect(solution(")(")).toBe(false);
  });
});
