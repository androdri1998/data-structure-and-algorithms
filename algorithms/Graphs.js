const { Queue } = require("../data-structures/Queue");
class Vertex {
  constructor(value) {
    this.value = value;
    this.adjacentVertices = [];
  }

  addAdjacentVertice(vertex) {
    if (this.adjacentVertices.includes(vertex)) {
      return;
    }

    this.adjacentVertices.push(vertex);
    vertex.addAdjacentVertice(this);
  }
}

const dfsTraverse = (vertex, visitedVertices = new Map()) => {
  visitedVertices.set(vertex.value, true);

  console.log(vertex.value);

  for (let adjacentVertex of vertex.adjacentVertices) {
    if (visitedVertices.has(adjacentVertex.value)) {
      continue;
    }

    dfsTraverse(adjacentVertex, visitedVertices);
  }
};

const dfsSearch = (vertex, searchValue, visitedVertices = new Map()) => {
  if (vertex.value === searchValue) {
    return vertex;
  }

  visitedVertices.set(vertex.value, true);

  for (let adjacentVertex of vertex.adjacentVertices) {
    if (visitedVertices.has(adjacentVertex.value)) {
      continue;
    }

    if (adjacentVertex.value === searchValue) {
      return adjacentVertex;
    }

    const vertexSearch = dfsSearch(
      adjacentVertex,
      searchValue,
      visitedVertices
    );

    if (vertexSearch) {
      return vertexSearch;
    }
  }

  return null;
};

const bfsTraverse = (startingVertex) => {
  const queue = new Queue();

  const visitedVertices = new Map();
  visitedVertices.set(startingVertex.value, true);
  queue.enqueue(startingVertex);

  while (queue.read()) {
    const currentVertex = queue.dequeue();

    console.log(currentVertex.value);

    for (let adjacentVertex of currentVertex.adjacentVertices) {
      if (!visitedVertices.has(adjacentVertex.value)) {
        visitedVertices.set(adjacentVertex.value);
        queue.enqueue(adjacentVertex);
      }
    }
  }
};

const bfsSearch = (startingVertex, searchValue) => {
  if (startingVertex.value === searchValue) {
    return startingVertex;
  }

  const queue = new Queue();

  const visitedVertices = new Map();
  visitedVertices.set(startingVertex.value, true);
  queue.enqueue(startingVertex);

  while (queue.read()) {
    const currentVertex = queue.dequeue();
    if (currentVertex.value === searchValue) {
      return currentVertex;
    }

    for (let adjacentVertex of currentVertex.adjacentVertices) {
      if (!visitedVertices.has(adjacentVertex.value)) {
        visitedVertices.set(adjacentVertex.value);
        queue.enqueue(adjacentVertex);
      }
    }
  }

  return null;
};

const shortestPath = (startVertex, finalVertex) => {
  const queue = new Queue();

  const cheapestPathTable = new Map();
  const cheapestPreviousVertexTable = new Map();

  const visitedVertices = new Map();
  visitedVertices.set(startVertex.value, true);
  cheapestPathTable.set(startVertex.value, 0);
  queue.enqueue(startVertex);

  while (queue.read()) {
    const currentVertex = queue.dequeue();

    for (let adjacentVertex of currentVertex.adjacentVertices) {
      const valueThroughCurrentVertice =
        cheapestPathTable.get(currentVertex.value) + 1;

      if (
        !cheapestPathTable.get(adjacentVertex.value) ||
        valueThroughCurrentVertice < cheapestPathTable.get(adjacentVertex.value)
      ) {
        cheapestPathTable.set(adjacentVertex.value, valueThroughCurrentVertice);
        cheapestPreviousVertexTable.set(
          adjacentVertex.value,
          currentVertex.value
        );
      }

      if (!visitedVertices.has(adjacentVertex.value)) {
        visitedVertices.set(adjacentVertex.value);
        queue.enqueue(adjacentVertex);
      }
    }
  }

  const shortestPath = [];
  let currentVertexValue = finalVertex.value;

  while (currentVertexValue !== startVertex.value) {
    shortestPath.push(currentVertexValue);
    currentVertexValue = cheapestPreviousVertexTable.get(currentVertexValue);
  }

  shortestPath.push(startVertex.value);
  return {
    steps: cheapestPathTable.get(finalVertex.value),
    path: shortestPath.reverse(),
  };
};

module.exports = {
  Vertex,
  dfsTraverse,
  dfsSearch,
  bfsTraverse,
  bfsSearch,
  shortestPath,
};
