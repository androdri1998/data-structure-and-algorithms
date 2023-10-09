const triangleNumbers = (limiter, sequenceNumber = 1) => {
  if (limiter === sequenceNumber) {
    return sequenceNumber;
  }

  return sequenceNumber + triangleNumbers(limiter, sequenceNumber + 1);
};

console.log(triangleNumbers(6));
