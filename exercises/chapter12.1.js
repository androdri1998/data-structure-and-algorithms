const addUntil100 = (array) => {
  if (array.length === 0) return 0;

  const sum = addUntil100(array.slice(1, array.length));

  if (array[0] + sum > 100) {
    return sum;
  }

  return array[0] + sum;
};

console.log(addUntil100([10, 20, 20, 30, 40, 20]));
