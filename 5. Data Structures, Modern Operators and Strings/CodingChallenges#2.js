// 1. Loop over the game.scored array and print each player's goal with its number
for (const [index, player] of game.scored.entries()) {
    console.log(`Goal ${index + 1}: ${player}`);
  }
  
  // 2. Calculate and log the average odd
  const odds = Object.values(game.odds);
  let averageOdd = 0;
  for (const odd of odds) averageOdd += odd;
  averageOdd /= odds.length;
  console.log(`Average odd: ${averageOdd.toFixed(2)}`);
  
  // 3. Print the 3 odds in a formatted way
  for (const [key, value] of Object.entries(game.odds)) {
    const teamName = key === 'x' ? 'draw' : `victory ${game[key]}`;
    console.log(`Odd of ${teamName}: ${value}`);
  }
  
  // 4. Bonus: Create the 'scorers' object
  const scorers = {};
  for (const player of game.scored) {
    scorers[player] = (scorers[player] || 0) + 1;
  }
  console.log(scorers);
  