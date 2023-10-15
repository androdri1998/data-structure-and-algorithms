const { sort } = require("./quicksort");

const findMissingNumber = (array) => {
  const length = array.length;
  const sortedArray = sort(array);
  let currentNumber = 0;

  for (let index = 0; index <= length; index++) {
    if (sortedArray[index] !== currentNumber) {
      break;
    }

    currentNumber++;
  }

  return currentNumber;
};

const arrayNumbers = [5, 3, 4, 1, 0];
console.log(findMissingNumber(arrayNumbers));
// output: 2
