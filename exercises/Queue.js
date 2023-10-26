class Queue {
  constructor() {
    this.data = new Map();
    this.firstIndex = 0;
    this.nextIndex = 0;
  }

  isEmpty() {
    return this.firstIndex === this.nextIndex;
  }

  enqueue(value) {
    this.data.set(this.nextIndex, value);
    this.nextIndex++;
  }

  dequeue() {
    if (!this.isEmpty()) {
      const value = this.read();
      this.data.delete(this.firstIndex);
      this.firstIndex++;

      return value;
    }

    return null;
  }

  read() {
    return this.data.get(this.firstIndex);
  }
}

module.exports = {
  Queue,
};
