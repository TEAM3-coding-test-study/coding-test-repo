function solution(n, costs) {
  var parent = [];
  for (var i = 0; i < n; i++) {
    parent[i] = i;
  }

  function find(x) {
    if (parent[x] === x) return x;
    parent[x] = find(parent[x]);
    return parent[x];
  }

  function union(a, b) {
    var rootA = find(a);
    var rootB = find(b);
    if (rootA !== rootB) {
      parent[rootB] = rootA;
      return true;
    }
    return false;
  }

  costs.sort(function (a, b) {
    return a[2] - b[2];
  });

  var totalCost = 0;
  var edgeCount = 0;

  for (var i = 0; i < costs.length; i++) {
    var a = costs[i][0];
    var b = costs[i][1];
    var cost = costs[i][2];

    if (union(a, b)) {
      totalCost += cost;
      edgeCount++;
      if (edgeCount === n - 1) break;
    }
  }

  return totalCost;
}
