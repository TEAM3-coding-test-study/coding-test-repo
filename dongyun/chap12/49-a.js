function solution(k, dungeons) {
  var answer = -1;
  const n = dungeons.length;
  const visited = new Set();
  let stamina = k;
  let maxVisited = 0;

  const enterD = () => {
    for (let i = 0; i < n; i++) {
      const [requireStamina, consumeStamina] = dungeons[i];
      if (stamina >= requireStamina && !visited.has(i)) {
        // 최소 피로도 이상이고, 방문하지 않음 = 해당 던전 방문 처리
        stamina -= consumeStamina;
        visited.add(i);
        if (visited.size >= maxVisited) maxVisited = visited.size;
        if (!enterD()) {
          stamina += consumeStamina;
          visited.delete(i);
        } else return true;
      }
    }
    return false;
  };

  enterD();

  return maxVisited;
}
