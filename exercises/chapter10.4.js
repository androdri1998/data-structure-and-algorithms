const printValues = (arrayNested) => {
  for (let index = 0; index <= arrayNested.length - 1; index++) {
    const item = arrayNested[index];
    if (typeof item === "number") {
      console.log(item);
      continue;
    }

    printValues(item);
  }
};

const arrayNested = [
  1,
  2,
  3,
  [4, 5, 6],
  7,
  [8, [9, 10, 11, [12, 13, 14]]],
  [15, 16, 17, 18, 19, [20, 21, 22, [23, 24, 25, [26, 27, 29]], 30, 31], 32],
  33,
];
printValues(arrayNested);
