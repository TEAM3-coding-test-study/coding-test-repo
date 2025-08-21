// 교재 정답

const genres1 = ["classic", "pop", "classic", "classic", "pop"];
const plays1 = [500, 600, 150, 800, 2500];

function solution(genres, plays) {
  let answer = [];
  const genresObj = {};
  const playObj = {};

  for (let i = 0; i < genres.length; i++) {
    const genre = genres[i];
    const play = plays[i];

    if (!(genre in genresObj)) {
      genresObj[genre] = []; // 빈 배열로 초기화해서 [[5,3200], [4, 10]] 과 같이 객체의 값들을 배열로 관리
      playObj[genre] = 0;
    }

    genresObj[genre].push([i, play]);
    playObj[genre] += play;
  }

  // 장르순 정렬
  const sortedGenres = Object.keys(playObj).sort((a, b) => {
    return playObj[b] - playObj[a];
  });

  for (const genre of sortedGenres) {
    const sortedSongs = genresObj[genre].sort((a, b) => {
      return a[1] === b[1] ? a[0] - b[0] : b[1] - a[1];
    });
    // console.log(sortedSongs);

    answer.push(...sortedSongs.slice(0, 2).map((song) => song[0]));
  }

  return answer;
}

solution(genres1, plays1);
