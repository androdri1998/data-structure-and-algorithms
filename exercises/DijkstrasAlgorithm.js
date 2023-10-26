const dijkstraShortestPath = (startingVertex, finalVertex) => {
  const cheapestPathTable = new Map();
  const cheapestPreviousVertexTable = new Map();

  let unvisitedVertex = [];
  const visitedVertex = new Map();

  cheapestPathTable.set(startingVertex.value, 0);
  let currentVertex = startingVertex;

  while (currentVertex) {
    visitedVertex.set(currentVertex.value, true);
    unvisitedVertex = unvisitedVertex.filter(
      (item) => item.value !== currentVertex.value
    );

    for (let [
      adjacentVertice,
      value,
    ] of currentVertex.adjacentVertices.entries()) {
      if (!visitedVertex.has(adjacentVertice.value)) {
        unvisitedVertex.push(adjacentVertice);
      }

      const valueThroughCurrentVertice =
        cheapestPathTable.get(currentVertex.value) + value;

      if (
        !cheapestPathTable.get(adjacentVertice.value) ||
        valueThroughCurrentVertice <
          cheapestPathTable.get(adjacentVertice.value)
      ) {
        cheapestPathTable.set(
          adjacentVertice.value,
          valueThroughCurrentVertice
        );
        cheapestPreviousVertexTable.set(
          adjacentVertice.value,
          currentVertex.value
        );
      }
    }

    if (unvisitedVertex.length === 0) {
      break;
    }

    let minValue = Number.MAX_SAFE_INTEGER;
    for (let vertex of unvisitedVertex) {
      if (cheapestPathTable.get(vertex.value) < minValue) {
        currentVertex = vertex;
        minValue = cheapestPathTable.get(vertex.value);
      }
    }
  }

  const shortestPath = [];
  let currentVertexValue = finalVertex.value;

  while (currentVertexValue !== startingVertex.value) {
    shortestPath.push(currentVertexValue);
    currentVertexValue = cheapestPreviousVertexTable.get(currentVertexValue);
  }

  shortestPath.push(startingVertex.value);
  return shortestPath.reverse();
};

module.exports = {
  dijkstraShortestPath,
};
