const golomb = (n, memoization = new Map()) => {
  if (n === 1) return 1;

  if (!memoization.get(n)) {
    memoization.set(
      n,
      1 +
        golomb(n - golomb(golomb(n - 1, memoization), memoization), memoization)
    );
  }

  return memoization.get(n);
};

console.log(golomb(7));
