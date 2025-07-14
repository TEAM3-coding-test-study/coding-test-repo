import solution from "./03-a";

describe("괄호 회전하기", () => {
  test("[](){}", () => {
    expect(solution("[](){}")).toBe(3);
  });
  test("}]()[{", () => {
    expect(solution("}]()[{")).toBe(2);
  });
  test("[)(]", () => {
    expect(solution("[)(]")).toBe(0);
  });
  test("}}}", () => {
    expect(solution("[)(]")).toBe(0);
  });  
});
