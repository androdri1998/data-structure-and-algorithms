const { sort } = require("./quicksort");

const arrayNumbers = [5, 3, 4, 2, 1, 0];

const findGreatestNumberNLogN = (array) => {
  const localArray = array.concat();

  const sortedArray = sort(localArray);

  return sortedArray[localArray.length - 1];
};
console.log(findGreatestNumberNLogN(arrayNumbers));
// output: 5

const findGreatestNumberN2 = (array) => {
  const localArray = array.concat();

  let greaterNumber = null;
  for (let index = 0; index <= localArray.length - 1; index++) {
    for (
      let internalIndex = 0;
      internalIndex <= localArray.length - 1;
      internalIndex++
    ) {
      if (
        localArray[internalIndex] > localArray[index] &&
        localArray[internalIndex] >= greaterNumber
      ) {
        greaterNumber = localArray[internalIndex];
      }
    }
  }

  return greaterNumber;
};
console.log(findGreatestNumberN2(arrayNumbers));
// output: 5

const findGreatestNumberN = (array) => {
  const localArray = array.concat();

  let greaterNumber = null;
  for (let index = 0; index <= localArray.length - 1; index++) {
    if (localArray[index] >= greaterNumber) {
      greaterNumber = localArray[index];
    }
  }

  return greaterNumber;
};
console.log(findGreatestNumberN(arrayNumbers));
// output: 5
