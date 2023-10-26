const { Vertex, dfsTraverse, dfsSearch, bfsTraverse } = require("./Graphs");

const one = new Vertex("one");
const two = new Vertex("two");
const three = new Vertex("three");
const four = new Vertex("four");
const five = new Vertex("five");
const six = new Vertex("six");
const seven = new Vertex("seven");
const eight = new Vertex("eight");
const nine = new Vertex("nine");

one.addAdjacentVertice(two);
one.addAdjacentVertice(three);
one.addAdjacentVertice(four);
one.addAdjacentVertice(five);

two.addAdjacentVertice(six);

four.addAdjacentVertice(five);
four.addAdjacentVertice(eight);

six.addAdjacentVertice(seven);

seven.addAdjacentVertice(three);

eight.addAdjacentVertice(nine);

dfsTraverse(one);
// output: one
// output: two
// output: six
// output: seven
// output: three
// output: four
// output: five
// output: eight
// output: nine
console.log("------------");
console.log(dfsSearch(one, "eight"));
// output: Vertex {
//     value: 'eight',
//     adjacentVertices: [
//         Vertex { value: 'four', adjacentVertices: [Array] },
//         Vertex { value: 'nine', adjacentVertices: [Array] }
//     ]
// }
console.log(dfsSearch(one, "none"));
// output: null
console.log("------------");
bfsTraverse(one);
// output: one
// output: two
// output: three
// output: four
// output: five
// output: six
// output: seven
// output: eight
// output: nine
