const { sort } = require("../algorithms/quicksort");

const getProduct = (arrayNumbers) => {
  const arrayProducts = [];
  const idxLast = arrayNumbers.length - 1;
  for (let index = idxLast; index > idxLast - 3; index--) {
    arrayProducts.push(arrayNumbers[index] * arrayNumbers[idxLast]);
  }

  return arrayProducts;
};

const arrayNumbers = [5, 3, 4, 1, 2];
console.log(sort(arrayNumbers));
// output: [ 1, 2, 3, 4, 5 ]
console.log(getProduct(arrayNumbers));
// output: [ 25, 20, 15 ]
