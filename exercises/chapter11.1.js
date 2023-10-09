const lengthStrings = (array = []) => {
  const lastIndex = array.length - 1;
  if (array.length === 1) {
    return array[lastIndex].length;
  }

  return lengthStrings(array.slice(0, lastIndex)) + array[lastIndex].length;
};

console.log(lengthStrings(["abc", "dfg", "hij", "klm", "op"]));
