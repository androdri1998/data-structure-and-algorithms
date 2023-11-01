const array = [98.6, 98.0, 97.1, 99.0, 98.9, 97.8, 98.5, 98.2, 98.0, 97.1];

const sortArray = (array) => {
  const hashTable = new Map();

  array.forEach((temperature) => {
    if (hashTable.has(temperature)) {
      const currentValue = hashTable.get(temperature);
      hashTable.set(temperature, currentValue + 1);
    } else {
      hashTable.set(temperature, 1);
    }
  });

  const sortedArray = [];

  let temperature = 970;
  while (temperature <= 990) {
    if (hashTable.has(temperature / 10)) {
      for (let index = 0; index < hashTable.get(temperature / 10); index++) {
        sortedArray.push(temperature / 10);
      }
    }

    temperature += 1;
  }

  return sortedArray;
};

console.log(sortArray(array));
