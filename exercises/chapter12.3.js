const uniquePaths = (rows, columns, memoization = new Map()) => {
  if (rows === 1 || columns === 1) {
    return 1;
  }

  if (!memoization.get(`${rows}-${columns}`)) {
    memoization.set(
      `${rows}-${columns}`,
      uniquePaths(rows - 1, columns, memoization) +
        uniquePaths(rows, columns - 1, memoization)
    );
  }

  return memoization.get(`${rows}-${columns}`);
};

console.log(uniquePaths(5, 4));
