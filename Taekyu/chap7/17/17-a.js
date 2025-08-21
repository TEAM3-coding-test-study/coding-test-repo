const cards1 = ["i", "drink", "water"];
const cards2 = ["want", "to"];
const goal = ["i", "want", "to", "drink", "water"];

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

const solution = (cards1, cards2, goal) => {
  const queue1 = new Queue();
  const queue2 = new Queue();

  queue1.items = cards1;
  queue2.items = cards2;

  for (let i = 0; i < goal.length; i++) {
    if (goal[i] === queue1.items[queue1.front]) {
      queue1.pop();
      continue;
    } else if (goal[i] === queue2.items[queue2.front]) {
      queue2.pop();
      continue;
    } else {
      return "No";
    }
  }
  return "Yes";
};

console.log(solution(cards1, cards2, goal));
