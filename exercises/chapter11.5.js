const shortPath = (columns, rows) => {
  const matrix = [];

  for (let row = 0; row < rows; row++) {
    matrix[row] = [];
  }

  const getShortPath = (matrix = [], columns, row = 0) => {
    if (matrix.length - 1 < row) {
      return matrix[row - 1][columns - 1];
    }

    for (let column = 0; column < columns; column++) {
      if (column === 0 && row === 0) {
        matrix[row][column] = 0;
        continue;
      }

      const abovePosition = row - 1 >= 0 ? row - 1 : 0;
      const leftPosition = column - 1 >= 0 ? column - 1 : 0;

      const aboveValue = matrix[abovePosition][column] | 0;
      const leftValue = matrix[row][leftPosition] | 0;

      const result = leftValue <= aboveValue ? aboveValue + 1 : leftValue + 1;

      matrix[row][column] = result;
    }

    return getShortPath(matrix, columns, row + 1);
  };

  return getShortPath(matrix, columns);
};

console.log(shortPath(5, 4));
// output: 7
