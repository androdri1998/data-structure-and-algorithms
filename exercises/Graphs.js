const { Queue } = require("./Queue");

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

module.exports = {
  Vertex,
  dfsTraverse,
  dfsSearch,
  bfsTraverse,
};
