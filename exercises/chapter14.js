const { LinkedList, Node } = require("../data-structures/linkedList");
const { DoublyLinkedList } = require("../data-structures/doublyLinkedList");

const node1 = new Node("a");
const node2 = new Node("b");
const node3 = new Node("c");
const node4 = new Node("d");

node1.setNextNode(node2);
node2.setNextNode(node3);
node3.setNextNode(node4);

const linkedList = new LinkedList(node1);

console.log(linkedList.read(2));
// output: c
console.log(linkedList.indexOf("c"));
// output: 2
linkedList.insertAtIndex(2, "test");
console.log(linkedList.read(2));
// output: test
linkedList.deleteAtIndex(2);
console.log(linkedList.read(2));
// output: c
linkedList.printList();
// output: a
// output: b
// output: c
// output: d
console.log(linkedList.getlastNode().data);
// output: d
linkedList.reverseList();
linkedList.printList();
// output: d
// output: c
// output: b
// output: a
linkedList.insertAtIndex(2, "test");
console.log(linkedList.read(2));
// output: test
const nodeMiddle = linkedList.getNodeAt(2);
linkedList.deleteNode(nodeMiddle);
console.log(linkedList.read(2));
// output: b
console.log("----------");

const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.insertAtEnd("a");
doublyLinkedList.insertAtEnd("b");
doublyLinkedList.insertAtEnd("c");
doublyLinkedList.insertAtEnd("d");
console.log(doublyLinkedList.indexOf("c"));
// output: 2
doublyLinkedList.printReverse();
// output: d
// output: c
// output: b
// output: a
