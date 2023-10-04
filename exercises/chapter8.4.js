const getFirstNonDuplicatedLetter = (word) => {
  const letters = new Map();
  let firstNonDuplicatedLetterIndex = 1;

  for (let index = 0; index <= word.length - 1; index++) {
    const letter = word[index];
    firstNonDuplicatedLetterIndex++;

    if (letters.has(letter)) {
      letters.delete(letter);
      continue;
    }

    letters.set(letter, firstNonDuplicatedLetterIndex);
  }

  let smallerValue = null;
  let firstLetter = null;
  for (let [letter, value] of letters) {
    if (value < smallerValue || smallerValue === null) {
      firstLetter = letter;
      smallerValue = value;
    }
  }

  return firstLetter;
};

console.log(getFirstNonDuplicatedLetter("sometimes"));
// output: o
