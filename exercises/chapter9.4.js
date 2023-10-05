const { stack } = require("./stack");

const reverseString = (word) => {
  const collection = stack();
  for (let index = 0; index <= word.length - 1; index++) {
    const letter = word[index];
    collection.add(letter);
  }

  let reverseWord = "";
  while (!collection.isEmpty()) {
    const lastLetter = collection.pop();
    reverseWord += lastLetter;
  }

  return reverseWord;
};

console.log(reverseString("testing"));
// output: gnitset
