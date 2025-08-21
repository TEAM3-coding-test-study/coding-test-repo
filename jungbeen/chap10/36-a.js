function solution(phone_book) {
  phone_book.sort((a, b) => a.length - b.length);
  for (let i = 0; i < phone_book.length - 1; i++) {
    for (let j = i + 1; j < phone_book.length; j++) {
      if (phone_book[i].length === phone_book[j].length) continue;
      if (phone_book[j].slice(0, phone_book[i].length) === phone_book[i])
        return false;
    }
  }
  return true;
}

console.log(solution(["119", "97674223", "1195524421"]));

// 시간 초과
