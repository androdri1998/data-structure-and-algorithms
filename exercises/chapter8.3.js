const insertIntoHashTable = (hashTable) => (item) => hashTable.set(item, false);
const createHashTable = (array) => {
  const hashTable = new Map();

  array.forEach(insertIntoHashTable(hashTable));

  return hashTable;
};

const buildAlphabetHashTable = () => {
  const alphabetArray = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const alphabetHashTable = createHashTable(alphabetArray);

  return alphabetHashTable;
};

const checkLetters = (array, hashTable) => {
  for (let index = 0; index <= array.length - 1; index++) {
    const letter = array[index];
    if (!!letter.trim()) {
      hashTable.set(letter, true);
    }
  }

  return hashTable;
};

const getMissingLetter = (alphabetHashTable) => {
  const alphabetEntries = alphabetHashTable.entries();
  let missingLetter = null;

  for (let [letter, value] of alphabetEntries) {
    if (!value) {
      missingLetter = letter;
      break;
    }
  }

  return missingLetter;
};

const identifyMissingLetter = (array = []) => {
  const alphabetHashTable = buildAlphabetHashTable();

  const alphabetHashTableChecked = checkLetters(array, alphabetHashTable);

  const letter = getMissingLetter(alphabetHashTableChecked);

  return letter;
};

console.log(identifyMissingLetter("abc def ghi jk mno pqr stu vwx yz"));
// output: l
