const { MaxHeap } = require("./MaxHeap");

const maxHeap = new MaxHeap();
maxHeap.insert(3);
maxHeap.insert(20);
maxHeap.insert(40);
maxHeap.insert(30);
maxHeap.insert(22);
maxHeap.insert(1);
maxHeap.insert(55);

console.log(maxHeap.data);
// output: [
//   55, 40, 30, 22,
//   20,  3,  1
// ]

console.log(maxHeap.rootNode());
// output: 55

maxHeap.delete(55);
console.log(maxHeap.rootNode());
// output: 40

maxHeap.delete(40);
console.log(maxHeap.rootNode());
// output: 30

maxHeap.delete(30);
console.log(maxHeap.rootNode());
// output: 22
