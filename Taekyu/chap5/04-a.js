const answers = [1, 2, 3, 4, 5];

const solution = (answers) => {
  const student1 = [];
  const student2 = [];
  const student3 = [];
  const atomic_data_1 = [1, 2, 3, 4, 5];
  const atomic_data_2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const atomic_data_3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const answerArrayMaker = (atom_d, student) => {
    if (answers.length >= atom_d.length) {
      const quota = Math.floor(answers.length / atom_d.length);
      const remainder = answers.length % atom_d.length;
      for (let i = 0; i < quota; i++) {
        student.push(...atom_d);
      }
      for (let i = 0; i < remainder; i++) {
        student.push(atom_d[i]);
      }
    } else if (answers.length < atom_d.length) {
      for (let i = 0; i < answers.length; i++) {
        student.push(atom_d[i]);
      }
    }
  };

  answerArrayMaker(atomic_data_1, student1);
  answerArrayMaker(atomic_data_2, student2);
  answerArrayMaker(atomic_data_3, student3);

  const totalArray = [student1, student2, student3];

  // 여기서부터는 가장 맞은 개수 많은 학생 구하는 부분
  const countArr = [];

  for (let i = 0; i < totalArray.length; i++) {
    let count = 0;
    for (let j = 0; j < answers.length; j++) {
      if (totalArray[i][j] === answers[j]) count++;
    }
    countArr.push(count);
  }
  const winner = [];
  countArr.map((item, index) => {
    if (item === Math.max(...countArr)) winner.push(index + 1);
  });

  return winner.sort((a, b) => a - b);
};

console.log(solution(answers));
