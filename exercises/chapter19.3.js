const reverse = (array) => {
  let startIndex = 0;
  let lastIndex = array.length - 1;

  while (startIndex <= lastIndex) {
    [array[startIndex], array[lastIndex]] = [
      array[lastIndex],
      array[startIndex],
    ];

    startIndex++;
    lastIndex--;
  }

  return array;
};

const array = [1, 2, 3, 4, 5, 6, 7];
console.log(reverse(array));
// output: [
//   7, 6, 5, 4,
//   3, 2, 1
// ]
