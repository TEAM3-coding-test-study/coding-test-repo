class Queue {
  items = [];
  rear = -1;
  front = -1;

  pop() {
    if (this.size() < 1) return null;
    const value = this.items[++this.front];
    return value;
  }

  push(val) {
    this.items[++this.rear] = val;
  }

  size() {
    return this.rear - this.front;
  }
}

function solution(n, k) {
  const q = new Queue();
  let removed;

  for (let i = 0; i < n; i++) q.push(i);

  while (q.size() > 1) {
    for (let i = 0; i < k - 1; i++) {
      const popped = q.pop();
      q.push(popped);
    }
    removed = q.pop();
  }
  return q.pop() + 1;
}

console.log(solution(11, 4));
