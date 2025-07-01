/*
 * 일단 문자열을 입력받음
 * 해당 문자열을 앞의 문자부터 여는 괄호인 경우 스택에 push
 * 스택을 각 괄호 종류별로 복수개 운영
 * 닫는 괄호가 나오면 스택에서 pop
 * 모든 문자를 다 처리한 후, 어떠한 스택에도 여는 괄호가 남아있지않다면 true
 * 위와같은 로직을 문자열을 회전해가면서 처리해야됨
 */

const str = "}}}";

const rotateStr = (str) => {
  const temp = str[0];
  for (let i = 1; i < str.length; i++) {
    str[i - 1] = str[i];
  }
  str[str.length - 1] = temp;
};

const rightDecider = (str) => {
  const smallStack = [];
  const mediumStack = [];
  const largeStack = [];

  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "(":
        smallStack.push("(");
        break;
      case ")":
        if (smallStack.length === 0) return false;
        else smallStack.pop();
        break;
      case "{":
        mediumStack.push("{");
        break;
      case "}":
        if (mediumStack.length === 0) return false;
        else mediumStack.pop();
        break;
      case "[":
        largeStack.push("[");
        break;
      case "]":
        if (largeStack.length === 0) return false;
        else largeStack.pop();
        break;
    }
  }

  if (smallStack.length === 0 && mediumStack.length === 0 && largeStack.length === 0) return true;
  else return false;
};

const solution = (str) => {
  let rightCount = 0;
  const strArray = [];

  for (let i = 0; i < str.length; i++) {
    strArray.push(str[i]);
  }

  if (rightDecider(strArray)) {
    rightCount++;
  }
  for (let i = 0; i < strArray.length - 1; i++) {
    rotateStr(strArray);
    if (rightDecider(strArray)) {
      rightCount++;
    }
  }

  return rightCount;
};

console.log(solution(str));
