const progresses = [95, 90, 99, 99, 80, 99];
const speeds = [1, 1, 1, 1, 1, 1];

const progresses2 = [93, 30, 55];
const speeds2 = [1, 30, 5];

const progresses3 = [99, 99];
const speeds3 = [1, 1];

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

const solution = (progresses, speeds) => {
  const queue = new Queue();
  const leftDurationArray = new Array(progresses.length);
  const returnArray = new Array();
  for (let i = 0; i < progresses.length; i++) {
    leftDurationArray[i] = Math.ceil((100 - progresses[i]) / speeds[i]);
  }
  leftDurationArray.push(Infinity);
  //   console.log(leftDurationArray);

  queue.push(leftDurationArray[0]);
  for (let i = 1; i < leftDurationArray.length; i++) {
    // console.log(queue);
    if (leftDurationArray[i] <= queue.items[queue.front]) {
      queue.push(leftDurationArray[i]);
    } else {
      returnArray.push(queue.items.length);
      // 큐 초기화
      queue.items.length = 0;
      queue.front = 0;
      queue.rear = 0;
      queue.push(leftDurationArray[i]);
    }
  }

  return returnArray;
};

console.log(solution(progresses3, speeds3));
