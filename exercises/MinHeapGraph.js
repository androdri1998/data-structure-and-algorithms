class MinHeapGraph {
  constructor() {
    this.data = [];
  }

  rootNode() {
    return this.data[0];
  }

  lastNode() {
    const lastIndex = this.data.length - 1;
    return this.data[lastIndex];
  }

  leftChildIndex(index) {
    return index * 2 + 1;
  }

  rightChildIndex(index) {
    return index * 2 + 2;
  }

  parentIndex(index) {
    return Math.floor(index - 1 / 2);
  }

  insert(value) {
    this.data.push(value);

    console.log(this.data);

    let newNodeIndex = this.data.length - 1;
    while (
      newNodeIndex > 0 &&
      this.data[newNodeIndex].value <
        this.data[this.parentIndex(newNodeIndex)].value
    ) {
      const parentIndex = this.parentIndex(newNodeIndex);

      [this.data[parentIndex], this.data[newNodeIndex]] = [
        this.data[newNodeIndex],
        this.data[parentIndex],
      ];

      newNodeIndex = parentIndex;
    }
  }

  hasSmallererChild(index) {
    return (
      (this.data[this.leftChildIndex(index)] &&
        this.data[this.leftChildIndex(index)].value < this.data[index].value) ||
      (this.data[this.rightChildIndex(index)] &&
        this.data[this.rightChildIndex(index)].value < this.data[index].value)
    );
  }

  calculateSmallerChildIndex(index) {
    if (!this.data[this.rightChildIndex(index)]) {
      return this.leftChildIndex(index);
    }

    if (
      this.data[this.rightChildIndex(index)].value <
      this.data[this.leftChildIndex(index)].value
    ) {
      return this.rightChildIndex(index);
    }

    return this.leftChildIndex(index);
  }

  delete() {
    if (this.data.length <= 1) {
      this.data.pop();
      this.data = [];
      return;
    }

    this.data[0] = this.data.pop();
    console.log(this.data);
    let currentNodeIndex = 0;

    while (this.hasSmallererChild(currentNodeIndex)) {
      const smallerChildIndex =
        this.calculateSmallerChildIndex(currentNodeIndex);

      [this.data[currentNodeIndex], this.data[smallerChildIndex]] = [
        this.data[smallerChildIndex],
        this.data[currentNodeIndex],
      ];

      currentNodeIndex = smallerChildIndex;
    }
  }
}

module.exports = {
  MinHeapGraph,
};
