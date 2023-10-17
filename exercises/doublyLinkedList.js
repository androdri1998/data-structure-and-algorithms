class Node {
  constructor(data) {
    this.data = data;
    this.nextNode = null;
    this.previousNode = null;
  }

  getData() {
    return this.data;
  }

  setNextNode(node) {
    this.nextNode = node;
  }

  getNextNode() {
    return this.nextNode;
  }

  setPreviousNode(node) {
    this.previousNode = node;
  }

  getPreviousNode() {
    return this.previousNode;
  }
}

class DoublyLinkedList {
  constructor(firstNode = null, lastNode = null) {
    this.firstNode = firstNode;
    this.lastNode = lastNode;
  }

  getHead() {
    return this.firstNode;
  }

  setHead(node) {
    this.firstNode = node;
  }

  getTail() {
    return this.lastNode;
  }

  setTail(node) {
    this.lastNode = node;
  }

  read(index) {
    let currentNode = this.getHead();
    let currentIndex = 0;

    while (currentIndex < index) {
      currentNode = currentNode.getNextNode();
      currentIndex += 1;

      if (currentNode === null) {
        return null;
      }
    }

    return currentNode.getData();
  }

  indexOf(value) {
    let currentIndex = 0;
    let currentNode = this.getHead();

    do {
      if (currentNode.getData() === value) {
        return currentIndex;
      }

      currentNode = currentNode.getNextNode();
      currentIndex += 1;
    } while (currentNode);

    return null;
  }

  insertAtEnd(value) {
    const node = new Node(value);
    if (!this.firstNode) {
      this.firstNode = node;
      this.lastNode = node;
      return;
    }

    node.setPreviousNode(this.lastNode);
    this.lastNode.setNextNode(node);
    this.lastNode = node;
  }
}

module.exports = {
  DoublyLinkedList,
  Node,
};
