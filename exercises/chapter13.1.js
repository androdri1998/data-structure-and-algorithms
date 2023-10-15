const sort = (arrayNumbers) => {
  const partition = (idxLeft, idxRight) => {
    let idxPivot = idxRight;
    let pivot = arrayNumbers[idxPivot];
    idxRight -= 1;

    while (true) {
      while (arrayNumbers[idxLeft] < pivot) {
        idxLeft += 1;
      }

      while (arrayNumbers[idxRight] > pivot) {
        idxRight -= 1;
      }

      if (idxLeft >= idxRight) {
        break;
      }

      [arrayNumbers[idxLeft], arrayNumbers[idxRight]] = [
        arrayNumbers[idxRight],
        arrayNumbers[idxLeft],
      ];
      idxLeft += 1;
    }

    [arrayNumbers[idxLeft], arrayNumbers[idxPivot]] = [
      arrayNumbers[idxPivot],
      arrayNumbers[idxLeft],
    ];

    return idxLeft;
  };

  const quickSort = (idxLeft, idxRight) => {
    if (idxRight - idxLeft <= 0) {
      return;
    }

    const idxPivot = partition(idxLeft, idxRight);

    quickSort(idxLeft, idxPivot - 1);
    quickSort(idxPivot + 1, idxRight);
  };

  quickSort(0, arrayNumbers.length - 1);

  return arrayNumbers;
};

const getProduct = (arrayNumbers) => {
  const arrayProducts = [];
  const idxLast = arrayNumbers.length - 1;
  for (let index = idxLast; index > idxLast - 3; index--) {
    arrayProducts.push(arrayNumbers[index] * arrayNumbers[idxLast]);
  }

  return arrayProducts;
};

const arrayNumbers = [5, 3, 4, 1, 2];
console.log(sort(arrayNumbers));
// output: [ 1, 2, 3, 4, 5 ]
console.log(getProduct(arrayNumbers));
// output: [ 25, 20, 15 ]
