const sport1Players = [
  { firstName: "one", lastName: "one1", team: "team one" },
  { firstName: "two", lastName: "two2", team: "team two" },
  { firstName: "three", lastName: "three3", team: "team two" },
  { firstName: "one", lastName: "four4", team: "team three" },
  { firstName: "five", lastName: "five5", team: "team three" },
];

const sport2Players = [
  { firstName: "six", lastName: "six6", team: "team four" },
  { firstName: "seven", lastName: "five5", team: "team five" },
  { firstName: "eight", lastName: "eight8", team: "team four" },
  { firstName: "one", lastName: "one1", team: "team five" },
  { firstName: "three", lastName: "three3", team: "team five" },
];

const whichPlayerPlayInBothSports = (array1, array2) => {
  const players = new Map();
  const playersInBothSports = [];

  array1.forEach((player) => {
    players.set(`${player.firstName}-${player.lastName}`, true);
  });

  array2.forEach((player) => {
    if (players.has(`${player.firstName}-${player.lastName}`)) {
      playersInBothSports.push(`${player.firstName} ${player.lastName}`);
    }
  });

  return playersInBothSports;
};

console.log(whichPlayerPlayInBothSports(sport1Players, sport2Players));
