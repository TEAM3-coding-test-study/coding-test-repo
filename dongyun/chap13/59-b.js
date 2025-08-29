function solution(numbers) {
    // 1. 숫자를 문자열로 변환
    const answer = numbers.map(String)
        // 2. 'b+a'와 'a+b'를 비교하는 핵심 로직
        .sort((a, b) => (b + a) - (a + b))
        // 3. 합치기
        .join('');

    // [0, 0, 0] -> "000"이 아닌 "0"으로 처리
    return answer[0] === '0' ? '0' : answer;
}