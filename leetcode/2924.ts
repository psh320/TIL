function findChampion(n: number, edges: number[][]): number {
  const championList: boolean[] = new Array(n).fill(true);
  edges.forEach((edge) => {
    if (championList[edge[1]]) {
      championList[edge[1]] = false;
    }
  });
  if (championList.filter((item) => item).length > 1) {
    return -1;
  } else {
    return championList.findIndex((item) => item);
  }
}

function findChampionBetterSolution(n: number, edges: number[][]): number {
  return 0;
}
