const stack = () => {
  const collection = new Map();
  const emptyIndex = 0;
  let index = emptyIndex;

  const isEmpty = () => index === emptyIndex;

  const add = (item) => {
    index++;
    collection.set(index, item);
  };

  const peek = () => {
    let item = collection.get(index);
    return item;
  };

  const pop = () => {
    if (!isEmpty()) {
      const peekItem = peek();
      collection.delete(index);
      index--;

      return peekItem;
    }
  };

  return {
    add,
    pop,
    peek,
    isEmpty,
  };
};

module.exports = {
  stack,
};
