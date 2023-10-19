const { TreeNode } = require("./BinarySearchTree");

const node1 = new TreeNode(30);
const node2 = new TreeNode(80);
const root = new TreeNode(60, node1, node2);

console.log(root.search(80, root));
root.insert(26, root);
console.log(root.search(26, root));
console.log(root.search(30, root));
root.delete(26, root);
console.log(root.search(26, root));
root.traverseAndPrint(root);
console.log("-------");
root.traverseAndPrintReverse(root);
