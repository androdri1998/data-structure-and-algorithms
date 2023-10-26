const dijkstraShortestPath = (startingVertex, finalVertex) => {
  const cheapestPathTable = new Map();
  const cheapestPreviousVertexTable = new Map();

  const unvisitedVertex = [];
  const visitedVertex = new Map();

  cheapestPathTable.set(startingVertex.value, 0);
  let currentCity = startingVertex;

  while (currentCity) {
    visitedVertex.set(currentCity.value, true);
    // unvisitedVertex.delet
  }
};
