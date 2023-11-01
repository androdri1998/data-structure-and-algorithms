const array = [5, -10, -6, 9, 4];

const findMaxProduct = (array) => {
  let minNumber = array[0];
  let maxNumber = array[0];
  let maxProduct = 0;

  array.forEach((number) => {
    let negativeProduct = number * minNumber;
    let positiveProduct = number * maxNumber;

    let nextMaxProduct =
      negativeProduct > positiveProduct ? negativeProduct : positiveProduct;
    maxProduct = nextMaxProduct > maxProduct ? nextMaxProduct : maxProduct;

    if (number > maxNumber) {
      maxNumber = number;
    }

    if (number < minNumber) {
      minNumber = number;
    }
  });

  return maxProduct;
};

console.log(findMaxProduct(array));
