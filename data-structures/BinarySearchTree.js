class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.leftChild = left;
    this.rightChild = right;
  }

  search(searchValue, node) {
    if (node === null || node.value === searchValue) {
      return node;
    }

    if (searchValue < node.value) {
      return this.search(searchValue, node.leftChild);
    }

    return this.search(searchValue, node.rightChild);
  }

  insert(value, node) {
    if (value < node.value) {
      if (node.leftChild === null) {
        node.leftChild = new TreeNode(value);
        return;
      }

      this.insert(value, node.leftChild);
    } else if (value > node.value) {
      if (node.rightChild === null) {
        node.rightChild = new TreeNode(value);
        return;
      }

      this.insert(value, node.rightChild);
    }
  }

  delete(valueToDelete, node) {
    if (node === null) {
      return null;
    }

    if (valueToDelete < node.value) {
      node.leftChild = this.delete(valueToDelete, node.leftChild);
      return node;
    } else if (valueToDelete > node.value) {
      node.rightChild = this.delete(valueToDelete, node.rightChild);
      return node;
    } else if (valueToDelete === node.value) {
      if (node.leftChild === null) {
        return node.rightChild;
      } else if (node.rightChild === null) {
        return node.leftChild;
      } else {
        node.rightChild = this.lift(node.rightChild, node);
        return node;
      }
    }
  }

  lift(node, nodeToDelete) {
    if (node.leftChild) {
      node.leftChild = this.lift(node.leftChild, nodeToDelete);
      return node;
    } else {
      nodeToDelete.value = node.value;
      return node.rightChild;
    }
  }

  traverseAndPrint(node) {
    if (node === null) {
      return;
    }

    this.traverseAndPrint(node.leftChild);
    console.log(node.value);
    this.traverseAndPrint(node.rightChild);
  }

  traverseAndPrintReverse(node) {
    if (node === null) {
      return;
    }

    this.traverseAndPrintReverse(node.rightChild);
    console.log(node.value);
    this.traverseAndPrintReverse(node.leftChild);
  }

  traverseAndPrintPreorder(node) {
    if (node === null) {
      return;
    }

    console.log(node.value);

    this.traverseAndPrintPreorder(node.leftChild);
    this.traverseAndPrintPreorder(node.rightChild);
  }

  traverseAndPrintPostorder(node) {
    if (node === null) {
      return;
    }

    this.traverseAndPrintPostorder(node.leftChild);
    this.traverseAndPrintPostorder(node.rightChild);
    console.log(node.value);
  }

  findGreatestNode(node) {
    if (node.rightChild === null) {
      return node;
    }

    return this.findGreatestNode(node.rightChild);
  }
}

module.exports = {
  TreeNode,
};
