// 실패

const progresses = [95, 90, 99, 99, 80, 99];
const speeds = [1, 1, 1, 1, 1, 1];

const progresses2 = [93, 30, 55];
const speeds2 = [1, 30, 5];

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
  console.log(leftDurationArray);
  let leftover = 0; // 끝부분의 남는 갯수 체크하는 변수
  queue.push(leftDurationArray[0]);
  for (let i = 1; i < leftDurationArray.length + 1; i++) {
    if (i === leftDurationArray.length) {
      leftover++;
      returnArray.push(leftover);
      break;
    }
    queue.push(leftDurationArray[i]);
    if (queue.items[queue.front] < queue.items[queue.rear - 1]) {
      returnArray.push(queue.items.length - 1);
      queue.items.length = 0;
      queue.front = 0;
      queue.rear = 0;
      queue.push(leftDurationArray[i]);
      leftover = 0;

      continue;
    } else {
      leftover++; // 남는 갯수 체크 (끝부분 처리를 위해)
    }
  }

  return returnArray;
};

console.log(solution(progresses, speeds));
