const array = [10, 5, 12, 3, 55, 30, 4, 11, 2];

const longestSequenceLength = (array) => {
  const hashTable = new Map();
  let greatestSequenceLength = 0;

  array.forEach((number) => {
    hashTable.set(number, true);
  });

  array.forEach((number) => {
    if (!hashTable.has(number - 1)) {
      let currentSequenceLength = 1;
      let currentNumber = number;

      while (hashTable.has(currentNumber + 1)) {
        currentNumber += 1;
        currentSequenceLength += 1;

        if (currentSequenceLength > greatestSequenceLength) {
          greatestSequenceLength = currentSequenceLength;
        }
      }
    }
  });

  return greatestSequenceLength;
};

console.log(longestSequenceLength(array));
