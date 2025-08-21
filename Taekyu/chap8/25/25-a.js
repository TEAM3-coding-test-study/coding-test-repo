const orders1 = ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"];
const course1 = [2, 3, 4];

const solution = (orders, course) => {
  const obj = {};

  for (const str of orders) {
    for (let i = 0; i < str.length; i++) {
      if (!obj[str[i]]) {
        obj[str[i]] = [];
      }
    }
  }

  for (let i = 0; i < orders.length; i++) {
    Object.keys(obj).forEach((item) => {
      if (orders[i].indexOf(item) !== -1) {
        obj[item].push(i);
      }
    });
  }

  console.log(obj);
};

solution(orders1, course1);
