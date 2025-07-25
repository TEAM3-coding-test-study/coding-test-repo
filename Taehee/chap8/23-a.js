function solution(genres, plays) {
  const genreobj = {};
  const genrePlayCount = {};
  const answer = [];

  for (let i = 0; i < genres.length; i++) {
    const genre = genres[i];
    const play = plays[i];

    if (!genreobj[genre]) {
      genreobj[genre] = [];
      genrePlayCount[genre] = 0;
    }

    genreobj[genre].push([i, play]);
    genrePlayCount[genre] += play;
  }

  const sortedGenres = Object.keys(genrePlayCount).sort(
    (a, b) => genrePlayCount[b] - genrePlayCount[a]
  );

  for (const genre of sortedGenres) {
    const sortedSongs = genreobj[genre].sort((a, b) => {
      if (b[1] === a[1]) return a[0] - b[0];
      return b[1] - a[1];
    });

    var count = sortedSongs.length > 2 ? 2 : sortedSongs.length;

    for (let i = 0; i < count; i++) {
      answer.push(sortedSongs[i][0]);
    }
  }

  return answer;
}
