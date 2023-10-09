const getEvenNumbers = (array, evenNumbers = []) => {
  if (array.length === 0) {
    return evenNumbers;
  }

  if (array[0] % 2 === 0) {
    evenNumbers.push(array[0]);
  }

  return getEvenNumbers(array.slice(1, array.length), evenNumbers);
};

console.log(getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
