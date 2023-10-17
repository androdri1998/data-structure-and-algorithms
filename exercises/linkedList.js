class Node {
  constructor(data) {
    this.data = data;
    this.nextNode = null;
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
}

class LinkedList {
  constructor(node) {
    this.firstNode = node;
  }

  getHead() {
    return this.firstNode;
  }

  setHead(node) {
    this.firstNode = node;
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

  insertAtIndex(index, value) {
    const node = new Node(value);

    if (index === 0) {
      node.setNextNode(this.getHead());
      this.setHead(node);
      return;
    }

    let currentNode = this.getHead();
    let currentIndex = 0;

    while (currentIndex < index - 1) {
      currentNode = currentNode.getNextNode();
      currentIndex += 1;
    }

    node.setNextNode(currentNode.getNextNode());
    currentNode.setNextNode(node);
  }

  deleteAtIndex(index) {
    if (index === 0) {
      this.setHead(this.getHead().getNextNode());
      return;
    }

    let currentNode = this.getHead();
    let currentIndex = 0;

    while (currentIndex < index - 1) {
      currentNode = currentNode.getNextNode();
      currentIndex += 1;
    }

    const nodeAfterDeletedNode = currentNode.getNextNode().getNextNode();
    currentNode.setNextNode(nodeAfterDeletedNode);
  }

  printList() {
    let currentNode = this.getHead();

    while (currentNode) {
      console.log(currentNode.getData());
      currentNode = currentNode.getNextNode();
    }
  }

  getlastNode() {
    let currentNode = this.getHead();

    while (currentNode.getNextNode()) {
      currentNode = currentNode.getNextNode();
    }

    return currentNode;
  }
}

module.exports = {
  LinkedList,
  Node,
};
