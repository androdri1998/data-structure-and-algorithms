class MaxHeap {
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

    let newNodeIndex = this.data.length - 1;
    while (
      newNodeIndex > 0 &&
      this.data[newNodeIndex] > this.data[this.parentIndex(newNodeIndex)]
    ) {
      const parentIndex = this.parentIndex(newNodeIndex);

      [this.data[parentIndex], this.data[newNodeIndex]] = [
        this.data[newNodeIndex],
        this.data[parentIndex],
      ];

      newNodeIndex = parentIndex;
    }
  }

  hasGreaterChild(index) {
    return (
      (this.data[this.leftChildIndex(index)] &&
        this.data[this.leftChildIndex(index)] > this.data[index]) ||
      (this.data[this.rightChildIndex(index)] &&
        this.data[this.rightChildIndex(index)] > this.data[index])
    );
  }

  calculateLargerChildIndex(index) {
    if (!this.data[this.rightChildIndex(index)]) {
      return this.leftChildIndex(index);
    }

    if (
      this.data[this.rightChildIndex(index)] >
      this.data[this.leftChildIndex(index)]
    ) {
      return this.rightChildIndex(index);
    }

    return this.leftChildIndex(index);
  }

  delete() {
    this.data[0] = this.data.pop();
    let currentNodeIndex = 0;

    while (this.hasGreaterChild(currentNodeIndex)) {
      const largerChildIndex = this.calculateLargerChildIndex(currentNodeIndex);

      [this.data[currentNodeIndex], this.data[largerChildIndex]] = [
        this.data[largerChildIndex],
        this.data[currentNodeIndex],
      ];

      currentNodeIndex = largerChildIndex;
    }
  }
}

module.exports = {
  MaxHeap,
};
