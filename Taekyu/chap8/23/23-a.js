const genres1 = ["classic", "pop", "classic", "classic", "pop"];
const plays1 = [500, 600, 150, 800, 2500];

const solution = (genres, plays) => {
  const genreType = new Set(genres);
  const dataObj = {};
  let sortedArr = new Array();

  for (const type of genreType) {
    dataObj[type] = {};
    for (let i = 0; i < genres.length; i++) {
      if (type === genres[i]) {
        dataObj[type][i] = plays[i];
      }
    }
  }
  // 장르 내 정렬
  for (const type of genreType) {
    sortedArr = Object.entries(dataObj[type]).sort(([, a], [, b]) => b - a);
  }

  // 장르간 정렬
  for (let i = 0; i < sortedArr.length; i++) {}

  console.log(dataObj);
};

solution(genres1, plays1);
