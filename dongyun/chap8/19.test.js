import solution from "./19-a";

describe("문자열 해싱을 이용한 검색 함수 만들기", () => {
    test("apple,banana,cherry | banana,kiwi,melon,apple", () => {
        expect(solution(["apple", "banana", "cherry"], ["banana", "kiwi", "melon", "apple"]))
            .toStrictEqual([true, false, false, true]);
    });
    test("test2", () => {
        expect(solution(["a"], ["a"])).toStrictEqual([true]);
    });

    test("test3", () => {
        expect(solution(["b"], ["a"])).toStrictEqual([false]);
    });

    test("test4", () => {
        expect(solution(["vscode", "vsstudio", "js", "ts", "axios", "kuit", "codeinterview"], 
            ["vscode", "intellij", "vue", "kuit"])).toStrictEqual([true, false, false, true]);
    });
});

