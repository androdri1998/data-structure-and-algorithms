class TrieNode {
  constructor() {
    this.children = new Map();
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  search(word) {
    let currentNode = this.root;

    for (let char of word) {
      if (currentNode.children.get(char)) {
        currentNode = currentNode.children.get(char);
      } else {
        return null;
      }
    }

    return currentNode;
  }

  insert(word) {
    let currentNode = this.root;

    for (let char of word) {
      if (currentNode.children.get(char)) {
        currentNode = currentNode.children.get(char);
      } else {
        const newNode = new TrieNode();
        currentNode.children.set(char, newNode);
        currentNode = newNode;
      }
    }

    currentNode.children.set("*", null);
  }

  collectAllWords(node = null, word = "", words = []) {
    let currentNode = node || this.root;

    for (let [key, childNode] of currentNode.children.entries()) {
      if (key === "*") {
        words.push(word);
      } else {
        this.collectAllWords(childNode, word.concat(key), words);
      }
    }

    return words;
  }

  autocomplete(prefix) {
    let currentNode = this.search(prefix);
    if (!currentNode) {
      return null;
    }

    return this.collectAllWords(currentNode);
  }

  printAllKeys(node = null) {
    let currentNode = node || this.root;

    for (let [key, childNode] of currentNode.children.entries()) {
      console.log(key);

      if (key === "*") {
        return;
      } else {
        this.printAllKeys(childNode);
      }
    }
  }
}

module.exports = {
  TrieNode,
  Trie,
};
