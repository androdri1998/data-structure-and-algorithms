const shortPath = (cols, rows) => {
  const matrix = [];

  for (let row = 0; row < rows; row++) {
    matrix[row] = [];
  }

  const getShortPath = (matrix = [], cols, row = 0) => {
    if (matrix.length - 1 < row) {
      return matrix[row - 1][cols - 1];
    }

    for (let col = 0; col < cols; col++) {
      if (col === 0 && row === 0) {
        matrix[row][col] = 0;
        continue;
      }

      const abovePosition = row - 1 >= 0 ? row - 1 : 0;
      const leftPosition = col - 1 >= 0 ? col - 1 : 0;

      const aboveValue = matrix[abovePosition][col] | 0;
      const leftValue = matrix[row][leftPosition] | 0;

      const result = leftValue <= aboveValue ? aboveValue + 1 : leftValue + 1;

      matrix[row][col] = result;
    }

    return getShortPath(matrix, cols, row + 1);
  };

  return getShortPath(matrix, cols);
};

console.log(shortPath(5, 4));
// output: 7
