// 1. Create player arrays for each team
const [players1, players2] = game.players;

// 2. Extract goalkeeper and field players for team 1
const [gk, ...fieldPlayers] = players1;

// 3. Create an array with all players from both teams
const allPlayers = [...players1, ...players2];

// 4. Add substitutes to team 1 players
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// 5. Extract odds into variables
const { team1, x: draw, team2 } = game.odds;

// 6. Function to print goals and count the number of players
function printGoals(...players) {
  console.log(`${players.length} goals were scored by:`);
  players.forEach(player => console.log(player));
}

// Test data for printGoals function
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

// 7. Determine the team more likely to win
console.log(
  team1 < team2 ? 'Team 1 is more likely to win' : 'Team 2 is more likely to win'
);
