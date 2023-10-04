const identifyDuplicatedItem = (array = []) => {
  const checkedItems = new Map();
  let duplicatedItem = null;

  for (let index = 0; index <= array.length - 1; index++) {
    const item = array[index];

    if (checkedItems.has(item)) {
      duplicatedItem = item;
      break;
    }

    checkedItems.set(item, true);
  }

  return duplicatedItem;
};

console.log(identifyDuplicatedItem([1, 2, 3, 4, 6, 2, 7, 8, 9, 9]));
