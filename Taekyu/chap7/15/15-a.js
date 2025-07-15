const n = 5;
const k = 2;

class Queue {
  items = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  pop() {
    return this.items[this.front++];
  }

  isEmpty() {
    return this.front === this.rear;
  }
}

const solution = (n, k) => {
  const queue = new Queue();
  const totalArray = new Array(n).fill().map((_, i) => i + 1);
};
