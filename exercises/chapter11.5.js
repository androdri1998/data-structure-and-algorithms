const uniquePaths = (rows, columns) => {
  if (rows === 1 || columns === 1) {
    return 1;
  }

  return uniquePaths(rows - 1, columns) + uniquePaths(rows, columns - 1);
};

console.log(uniquePaths(5, 4));
// output: 35
