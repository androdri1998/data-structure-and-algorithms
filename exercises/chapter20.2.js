const array = [4, 1, 2, 3, 0];

const findMissinOne = (array) => {
  let total = array.length + 1;
  let totalSum = 0;
  let arraySum = 0;

  for (index = 0; index < total; index++) {
    totalSum += index;
    arraySum += array[index] || 0;
  }

  return totalSum - arraySum;
};

console.log(findMissinOne(array));
// outpuy: 5
