const findXLetter = (string, index = 0) => {
  if (string.length <= index) {
    return null;
  }

  if (string[index].toLowerCase() === "x") {
    return index;
  }

  return findXLetter(string, index + 1);
};

console.log(findXLetter("abcdefghxjklmnop"));
