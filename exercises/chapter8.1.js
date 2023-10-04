const defineLengthArrays = (firstArray = [], secondArray = []) => {
  let biggerArray = [];
  let smallerArray = [];
  if (firstArray.length > secondArray.length) {
    biggerArray = firstArray;
    smallerArray = secondArray;

    return { biggerArray, smallerArray };
  }

  biggerArray = secondArray;
  smallerArray = firstArray;

  return { biggerArray, smallerArray };
};

const insertIntoHashTable = (hashTable) => (item) => hashTable.set(item, true);
const createHashTable = (array = []) => {
  const hashTable = new Map();
  array.forEach(insertIntoHashTable(hashTable));

  return hashTable;
};

const intersection = (firstArray, secondArray) => {
  const { biggerArray, smallerArray } = defineLengthArrays(
    firstArray,
    secondArray
  );

  const hashTable = createHashTable(biggerArray);
  const intersection = [];

  for (let index = 0; index <= smallerArray.length - 1; index++) {
    const item = smallerArray[index];
    if (hashTable.has(item)) {
      intersection.push(item);
    }
  }

  return intersection;
};

console.log(intersection([1, 2, 3, 4, 5, 6, 7, 8], [9, 2, 5, 10, 12, 25, 30]));
// output: [ 2, 5 ]
