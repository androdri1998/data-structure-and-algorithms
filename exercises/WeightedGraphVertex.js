class WeightedGraphVertex {
  constructor(value) {
    this.value = value;
    this.adjacentVertices = new Map();
  }

  addAdjacentVertex(vertex, weight) {
    this.adjacentVertices.set(vertex, weight);
  }
}

module.exports = {
  WeightedGraphVertex,
};
