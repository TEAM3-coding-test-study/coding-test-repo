// 교재 답안
function solution(n, words) {
    const usedWord = new Set(); 
    let prevWord = words[0][0]; // 왜 0번 인덱스가 마지막 글자가 되지?

    for (i = 0; i < words.length; i++) {
        const word = words[i];
        if (usedWord.has(word) || word[0] != prevWord) {
            return [i % n + 1, Math.floor(i / n) + 1];
        }

        usedWord.add(word);
        prevWord = word.slice(-1);
    }
    return [0, 0];
}

// console.log(solution(3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"])) //[3,3]
console.log(solution(5, ["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"])); //[0,0]