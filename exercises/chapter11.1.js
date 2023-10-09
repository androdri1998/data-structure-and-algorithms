const lengthStrings = (array = []) => {
  if (array.length === 0) {
    return 0;
  }

  const lastIndex = array.length - 1;
  return lengthStrings(array.slice(0, lastIndex)) + array[lastIndex].length;
};

console.log(lengthStrings(["abc", "dfg", "hij", "klm", "op"]));
