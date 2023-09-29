const findGreatestNumber = (array = []) => {
  let greatestNumber = array[0];
  for (let index = 1; index <= array.length; index++) {
    if (array[index] > greatestNumber) {
      greatestNumber = array[index];
    }
  }

  return greatestNumber;
};

console.log(findGreatestNumber([2, 4, 6, 7, 30, 50, 40, 20]));
// output: 50
