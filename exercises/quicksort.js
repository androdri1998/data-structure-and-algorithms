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

module.exports = {
  sort,
};
