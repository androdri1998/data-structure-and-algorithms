const { MaxHeap } = require("./MaxHeap");
const { MinHeap } = require("./MinHeap");

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

console.log("--------");
const minHeap = new MinHeap();
minHeap.insert(3);
minHeap.insert(20);
minHeap.insert(40);
minHeap.insert(30);
minHeap.insert(22);
minHeap.insert(1);
minHeap.insert(55);

console.log(minHeap.data);
// output: [
//    1,  3, 20, 22,
// ]

console.log(minHeap.rootNode());
// output: 1

minHeap.delete(1);
console.log(minHeap.rootNode());
// output: 3

minHeap.delete(3);
console.log(minHeap.rootNode());
// output: 20

minHeap.delete(20);
console.log(minHeap.rootNode());
// output: 22
