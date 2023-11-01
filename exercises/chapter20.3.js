const array = [11, 8, 3, 9, 10, 1, 5];

const bestDeal = (array) => {
  let smaller = array[0];
  let profit = 0;

  array.forEach((number) => {
    if (number < smaller) {
      smaller = number;
    }

    if (number - smaller > profit) {
      profit = number - smaller;
    }
  });

  return profit;
};

console.log(bestDeal(array));
// output: 7
